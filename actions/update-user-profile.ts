"use server";

import { db } from "@/lib/db";
import { phoneToInternational } from "@/lib/phone";
import { auth } from "../auth";
import { UpdateUserProfileSchema, UpdateUserProfileType } from "../schemas";

export const updateUserProfile = async (data: UpdateUserProfileType) => {
  try {
    // Verifica se o usuário está autenticado
    const session = await auth();

    if (!session?.user?.id) {
      return { error: "Usuário não autenticado", success: false };
    }

    // Valida os dados do formulário
    const validatedFields = UpdateUserProfileSchema.safeParse(data);

    if (!validatedFields.success) {
      return { error: "Dados inválidos", success: false };
    }

    const { name, phone } = validatedFields.data;

    // Prepara os dados para atualização
    const updateData: { name?: string; phone?: string | null } = {};

    if (name !== undefined) {
      updateData.name = name;
    }

    if (phone !== undefined) {
      if (phone && phone.trim() !== '') {
        // Converte para formato internacional limpo
        const internationalPhone = phoneToInternational(phone);

        if (!internationalPhone) {
          return { error: "Número de telefone inválido", success: false };
        }

        updateData.phone = internationalPhone;
      } else {
        // Se telefone vazio, remove do banco
        updateData.phone = null;
      }
    }

    // Se não há dados para atualizar
    if (Object.keys(updateData).length === 0) {
      return { error: "Nenhum dado para atualizar", success: false };
    }

    // Atualiza no banco de dados
    await db.user.update({
      where: { id: session.user.id },
      data: updateData,
    });

    return {
      success: true,
      message: "Perfil atualizado com sucesso!"
    };

  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    return {
      error: "Erro interno do servidor",
      success: false
    };
  }
}; 