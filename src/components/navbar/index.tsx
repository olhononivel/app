"use client";

import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import defaultAvatar from "../../../public/images/default-avatar.svg";

interface NavBarProps {
	name: string;
	image: string | null;
	role: string;
	signOut: VoidFunction;
}

// TabBar Mobile Component
const MobileTabBar = ({ role }: { role: string; signOut: VoidFunction }) => {
	const pathname = usePathname();

	const tabItems = [
		{
			href: "/home",
			label: "Início",
			icon: (active: boolean) => (
				<svg className={`w-6 h-6 ${active ? 'text-blue-600' : 'text-gray-400'}`} fill={active ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
			)
		},
		{
			href: "/notifications",
			label: "Alertas",
			icon: (active: boolean) => (
				<svg className={`w-6 h-6 ${active ? 'text-orange-600' : 'text-gray-400'}`} fill={active ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
				</svg>
			)
		},
		{
			href: "/help",
			label: "Ajuda",
			icon: (active: boolean) => (
				<svg className={`w-6 h-6 ${active ? 'text-purple-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			)
		},
		{
			href: "/account",
			label: "Perfil",
			icon: (active: boolean) => (
				<svg className={`w-6 h-6 ${active ? 'text-blue-600' : 'text-gray-400'}`} fill={active ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
				</svg>
			)
		},
	];

	// Adiciona dashboard para admin
	if (role === "ADMIN") {
		tabItems.splice(3, 0, {
			href: "/dashboard",
			label: "Dashboard",
			icon: (active: boolean) => (
				<svg className={`w-6 h-6 ${active ? 'text-indigo-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
				</svg>
			)
		});
	}

	return (
		<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 z-50">
			<div className="flex justify-around items-center max-w-md mx-auto">
				{tabItems.map((item) => {
					const isActive = pathname === item.href;
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-300 min-w-0 flex-1 ${isActive
								? 'bg-gray-50'
								: 'hover:bg-gray-50'
								}`}
						>
							{item.icon(isActive)}
							<span className={`text-xs font-medium mt-1 truncate ${isActive
								? pathname.includes('/new-device') ? 'text-green-600' :
									pathname.includes('/notifications') ? 'text-orange-600' :
										pathname.includes('/help') ? 'text-purple-600' :
											pathname.includes('/dashboard') ? 'text-indigo-600' :
												'text-blue-600'
								: 'text-gray-500'
								}`}>
								{item.label}
							</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

const NavBar = ({ name, image, role, signOut }: NavBarProps) => {
	const avatar = image || defaultAvatar;
	const pathname = usePathname();

	const navLinks = [
		{ href: "/home", label: "Início" },
		{ href: "/help", label: "Ajuda" },
	];

	if (role === "ADMIN") {
		navLinks.push({ href: "/dashboard", label: "Dashboard" });
	}

	const isDashboard = useCallback((): boolean => {
		"use client";
		return pathname.includes("/dashboard");
	}, [pathname]);

	return (
		<>
			{/* Desktop Navbar */}
			{isDashboard() ? null : (
				<nav className="hidden lg:flex bg-white shadow h-20 items-center">
					<div className="container px-6 mx-auto">
						<div className="flex items-center justify-between">
							<Logo />

							{/* Desktop Menu */}
							<div className="flex items-center space-x-8">
								{navLinks.map((link) => {
									const isActive = pathname === link.href;
									return (
										<Link
											key={link.href}
											href={link.href}
											className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive
												? 'bg-blue-50 text-blue-600'
												: 'text-gray-700 hover:bg-gray-100'
												}`}
										>
											{link.label}
										</Link>
									);
								})}

								{/* Notificações Desktop */}
								<Link
									href="/notifications"
									className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-300"
									aria-label="Notificações"
								>
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
									</svg>
								</Link>

								{/* Profile Desktop */}
								<Link
									href="/account"
									className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
								>
									<div className="w-8 h-8 overflow-hidden border-2 border-gray-300 rounded-full">
										<Image
											src={avatar}
											className="object-cover w-full h-full"
											alt="avatar"
											width={32}
											height={32}
										/>
									</div>
									<span className="text-sm font-medium text-gray-700">{name}</span>
								</Link>

								{/* Logout Desktop */}
								<button
									onClick={signOut}
									className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300"
								>
									Sair
								</button>
							</div>
						</div>
					</div>
				</nav>
			)}

			{/* Mobile TabBar */}
			{!isDashboard() && <MobileTabBar role={role} signOut={signOut} />}
		</>
	);
};

export default NavBar;
