import { getDeviceByCode } from "@/data/device";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    console.log("🔴 code: ", code.toUpperCase());
    if (code.length !== 9) {
      return Response.json({ error: "Código inválido", data: null }, { status: 400 });
    }

    const existingDevice = await getDeviceByCode(code.toUpperCase());

    if (!existingDevice) {
      console.log("🔴 Dispositivo não encontrado");
      return Response.json({ error: "Dispositivo não encontrado", data: null }, { status: 404 });
    }

    if (existingDevice.active) {
      console.log("🔴 Dispositivo já foi ativado anteriormente!");
      return new Response(JSON.stringify({ error: "Dispositivo já foi ativado anteriormente!", data: null }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    const deviceUpdated = await db.device.update({
      where: { id: existingDevice.id },
      data: {
        active: true
      }
    });

    if (!deviceUpdated) {
      console.log("🔴 Erro ao ativar dispositivo");
      return Response.json({ error: "Erro ao ativar dispositivo", data: null }, { status: 500 });
    }

    const device = {
      loraAddress: deviceUpdated.loraAddress,
      loraSerial: deviceUpdated.loraSerial,
    };

    // status 201 Created
    return Response.json({ error: null, data: device }, { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return Response.json({ error: errorMessage }, { status: 400 });
  }
}
