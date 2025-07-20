import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "../auth.config";

import {
	DEFAULT_DASHBOARD_REDIRECT,
	DEFAULT_LOGIN_REDIRECT,
	apiAuthPrefix,
	authRoutes,
	publicRoutes
} from '../routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname)

	if (isApiAuthRoute) {
		return;
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			const redirectTo = req.auth?.user?.role === "ADMIN" ? DEFAULT_DASHBOARD_REDIRECT : DEFAULT_LOGIN_REDIRECT;
			return NextResponse.redirect(new URL(redirectTo, nextUrl));
		}

		return;
	}

	if (!isLoggedIn && !isPublicRoute) {
		return NextResponse.redirect(new URL('/auth/login', nextUrl));
	}
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
