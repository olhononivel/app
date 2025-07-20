"use server";

import { signIn } from "../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";

import { LoginSchema } from '../schemas';
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import * as z from "zod";

export const login = async (credentials: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(credentials);

	if (!validatedFields.success) {
		return { error: "Campos inválidos!" };
	}

	const { email, password } = validatedFields.data;

	const existingUser = await getUserByEmail(email);

	if (!existingUser || !existingUser.password || !existingUser.email) {
		return { error: 'Credenciais inválidas!' };
	}

	if (!existingUser.emailVerified) {
		// verifica se o usuário já possui um token de verificação e 
		const existingVerificationToken = await getVerificationTokenByEmail(existingUser.email);

		if (existingVerificationToken) {
			// verifica se ja se passaram 5 minutos desde criação do token
			const verificationTokenCreated = new Date(existingVerificationToken.createdAt);
			const now = new Date();

			const diffMs = now.getTime() - verificationTokenCreated.getTime();
			const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

			if (diffMins <= 5) {
				return { success: 'Verifique sua caixa de entrada, span ou lixeira, o email de verificação pode demorar alguns minutos para chegar!' };
			}
		}

		const verificationToken = await generateVerificationToken(existingUser.email);

		await sendVerificationEmail(
			verificationToken.email,
			verificationToken.token
		);

		return { success: 'Enviamos um email de confirmação, verifique sua caixa de entrada!' };
	}

	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: 'Credenciais inválidas!' }

				default:
					return { error: 'Revise sua conexão, as credenciais e tente novamente!' }
			}
		}

		throw error;
	}
};
