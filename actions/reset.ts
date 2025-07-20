"use server";

import * as z from "zod";
import { ResetPassSchema } from "../schemas";
import { getUserByEmail } from "@/data/user";
import { sendResetPasswordEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";

export const reset = async (values: z.infer<typeof ResetPassSchema>) => {
	const validatedFields = ResetPassSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Campo de email inválido!" };
	}

	const user = await getUserByEmail(validatedFields.data.email);

	if (!user) {
		return { error: "Usuário não cadastrado!" };
	}

	const existingResetToken = await getPasswordResetTokenByEmail(user.email);

	if (existingResetToken) {
		const verificationTokenCreated = new Date(existingResetToken.createdAt);
		const now = new Date();

		const diffMs = now.getTime() - verificationTokenCreated.getTime();
		const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

		if (diffMins <= 1) {
			return { success: "Já enviamos um email com link para redefinir a senha. Verifique sua caixa de entrada!" };
		}
	}

	const passwordResetToken = await generatePasswordResetToken(user.email);

	await sendResetPasswordEmail(user.email, passwordResetToken.token);

	return { success: "Enviamos um email com link para redefinir a senha." };
};
