"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { NewPasswordSchema } from "../schemas";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const newPassword = async (
	values: z.infer<typeof NewPasswordSchema>,
	token?: string | null,
) => {
	if (!token) {
		return { error: "Token não encontrado" };
	}

	const validatedFields = NewPasswordSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Campos inválidos" };
	}

	const { password } = validatedFields.data;

	const existingToken = await getPasswordResetTokenByToken(token);

	if (!existingToken) {
		return { error: "Link de reset inválido, solicite novamente o reset da sua senha!" };
	}

	const hasExpired = new Date(existingToken.expires) < new Date();

	if (hasExpired) {
		return { error: "Token expirado! Solicite novamente o reset da sua senha!" };
	}

	const existingUser = await getUserByEmail(existingToken.email);

	if (!existingUser) {
		return { error: "Usuário não encontrado!" };
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	await db.user.update({
		where: { id: existingUser.id },
		data: {
			password: hashedPassword,
		},
	});

	await db.passwordResetToken.delete({
		where: { id: existingToken.id },
	});

	return { success: "Nova senha cadastrada com sucesso! Vamos te redirecionar para tela de login!" };
};
