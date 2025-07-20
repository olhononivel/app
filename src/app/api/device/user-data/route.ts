import { NextRequest } from 'next/server';
import { getUserDeviceDataAction } from '../../../../../actions/device/getUserDeviceDataAct';
import { auth } from '../../../../../auth';

export async function GET(request: NextRequest) {
  // valida de usuario esta logado
  const user = await auth();

  // verifica se o usuario esta logado ou a req em ambiente de desenvolvimento
  if (!user && process.env.NODE_ENV !== 'development') {
    return Response.json({ error: 'Usuário não encontrado', data: null }, { status: 401 });
  }

  try {
    // Extrai o parâmetro limit da query string (padrão: 20)
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam, 10) : 20;

    // Valida o limit
    if (isNaN(limit) || limit < 1 || limit > 100) {
      return Response.json(
        { error: 'Limit deve ser um número entre 1 e 100', data: null },
        { status: 400 }
      );
    }

    // Chama o action para buscar os dados
    const result = await getUserDeviceDataAction(limit);

    if (result.error) {
      return Response.json(
        { error: result.error, data: null },
        { status: result.error === 'Usuário não encontrado' ? 401 : 500 }
      );
    }

    return Response.json({
      error: null,
      data: result.data || [],
      totalDevices: result.totalDevices || 0
    }, { status: 200 });

  } catch (error) {
    console.error('Erro na API de device data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro interno do servidor';
    return Response.json(
      { error: errorMessage, data: null },
      { status: 500 }
    );
  }
} 