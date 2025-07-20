"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcryptjs from "bcryptjs";

import * as z from "zod";
import { RegisterSchema } from '../schemas';

import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Invalid fields" };
	}

	const { name, email, password } = values;
	const hashedPassword = await bcryptjs.hash(password, 10);

	const existingUser = await getUserByEmail(email);

	if (existingUser && !existingUser.emailVerified) {
		const verificationToken = await generateVerificationToken(email);

		sendVerificationEmail(
			verificationToken.email,
			verificationToken.token
		);
		return { success: true, message: "Você já possui uma conta, enviamos um novo email de verificação!" };
	}

	if (existingUser) {
		return { error: true, message: "Usuário já cadastrado, faça login ou recupere sua senha!" };
	}

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword
		}
	});

	const verificationToken = await generateVerificationToken(email);

	sendVerificationEmail(
		verificationToken.email,
		verificationToken.token
	);

	return { success: true, message: "Email de confirmação enviado, verifique sua caixa de entrada!" };
}
