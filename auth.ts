import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

import { getUserByEmail, getUserById } from "@/data/user"
import { db } from "@/lib/db"
import { UserRole } from "@prisma/client"
import authConfig from "./auth.config"

export const {
	auth,
	handlers: { GET, POST },
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: "/auth/login",
		error: "/auth/error",
	},
	events: {
		async linkAccount({ user }) {
			await db.user.update({
				where: { id: user.id },
				data: {
					emailVerified: new Date()
				}
			})
		}
	},
	callbacks: {
		async signIn({ user, account }) {
			if (account?.provider !== "credentials") return true;

			const existingUser = await getUserById(user?.id as string);

			if (!existingUser?.emailVerified) return false;

			// TODO: Add 2FA check
			return true;
		},
		async session({ session, token }) {
			if (token.sub && session.user) {
				session.user.id = token.sub
			}

			if (token.role && session.user) {
				session.user.role = token.role as UserRole
			}

			if (token.phone !== undefined && session.user) {
				session.user.phone = token.phone as string | null
			}

			return session
		},
		async jwt({ token, user, trigger }) {
			// Se o usuário estiver fazendo login (seja por Google ou credenciais)
			if (trigger === "signIn" || trigger === "signUp" || trigger === "update") {
				if (user) {
					// Caso seja um login novo, buscar o usuário para garantir que a role esteja disponível
					const existingUser = await getUserByEmail(user.email as string);

					if (existingUser) {
						token.role = existingUser.role;
						token.phone = existingUser.phone;
					}
				}
				return token;
			}

			// Caso seja uma atualização de token
			if (!token.sub) return token;

			// Caso já tenhamos a role no token, retorná-lo (mas sempre buscar dados atualizados)
			const existingUser = await getUserById(token.sub);

			if (!existingUser) return token;

			token.role = existingUser.role;
			token.phone = existingUser.phone;

			return token
		}
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
})