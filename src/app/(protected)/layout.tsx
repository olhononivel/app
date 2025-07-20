// src/app/(protected)/layout.tsx
import NavBar from "@/components/navbar";
import { SessionProvider } from "@/contexts/sessionContext";
import { prettierName } from "@/utils/prettierName";
import { ReactNode } from "react";
import { auth, signOut } from "../../../auth";

export type Root = {
	user: User;
	expires: string;
};

export type User = {
	name: string;
	email: string;
	image: string | null;
	id: string;
	role: string;
	phone?: string | null;
};

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
	const session = await auth() as Root;

	if (!session) {
		return null;
	}

	const { name, image, role } = session.user;

	const handleSignOut = async () => {
		"use server";
		await signOut();
	};

	return (
		<SessionProvider session={session}>
			<div className="min-h-screen flex flex-col bg-white">
				<NavBar name={prettierName(name)} image={image} role={role} signOut={handleSignOut} />
				<main className="flex-1 pb-20 lg:pb-0">{children}</main>
			</div>
		</SessionProvider>
	);
}
