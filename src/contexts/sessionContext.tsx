"use client";

import { createContext, useContext } from "react";

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

type SessionContextType = Root;

const SessionContext = createContext<SessionContextType>({} as Root);

export const useSession = () => {
	return useContext(SessionContext);
};

export const SessionProvider = ({
	session,
	children,
}: {
	session: SessionContextType;
	children: React.ReactNode;
}) => {
	return (
		<SessionContext.Provider value={session}>{children}</SessionContext.Provider>
	);
};
