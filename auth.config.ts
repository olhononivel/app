import bcryptjs from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { LoginSchema } from "./schemas";

import { getUserByEmail } from "@/data/user";

export default {
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "select_account", // Sempre perguntar qual conta usar
				},
			},
		}),
		Credentials({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials);

				if (validatedFields.success) {
					const { email, password } = validatedFields.data;

					const user = await getUserByEmail(email);
					if (!user || !user.password) return null;

					const passwordMatch = await bcryptjs.compare(
						password,
						user.password
					);

					if (passwordMatch) return user;
				};

				return null;
			}
		})
	]
} satisfies NextAuthConfig;
