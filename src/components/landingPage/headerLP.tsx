"use client";

import Link from "next/link";
import { useState } from "react";

import { LoginButton } from "../auth/login-button";
import Logo from "../logo";

export function HeaderLP() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const texts = {
		login: "Entrar",
		howItWorks: "Como Funciona",
		benefits: "Benefícios",
		prices: "Preços",
		contact: "Contato"
	}

	const menuItems = [
		{ label: texts.howItWorks, href: "#howItWorks" },
		{ label: texts.benefits, href: "#benefits" },
		{ label: texts.prices, href: "#prices" },
		{ label: texts.contact, href: "#contact" },
	];

	return (
		<>
			<nav className="@container fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 @lg:h-20">
						{/* Logo */}
						<div className="flex-shrink-0">
							<Logo />
						</div>

						{/* Menu Desktop */}
						<div className="hidden @lg:flex items-center space-x-8">
							{menuItems.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									className="relative group px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300"
								>
									{item.label}
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
								</Link>
							))}
						</div>

						{/* CTAs */}
						<div className="flex items-center space-x-4">
							{/* Login Button */}
							<LoginButton>
								<button className="group relative px-4 @lg:px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden">
									<span className="relative z-10">
										{texts.login}
									</span>
									<div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</button>
							</LoginButton>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="@lg:hidden relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
								aria-label="Menu"
							>
								<div className="w-6 h-6 flex flex-col justify-center items-center">
									<span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
									<span className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
									<span className={`w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
								</div>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				<div className={`@lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
					<div className="max-w-7xl mx-auto px-4 py-6">
						<div className="flex flex-col space-y-4">
							{menuItems.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									onClick={() => setIsMenuOpen(false)}
									className="group px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-xl hover:bg-blue-50"
								>
									<span className="flex items-center">
										{item.label}
										<svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</nav>

			{/* Overlay para mobile menu */}
			{isMenuOpen && (
				<div
					className="@lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
					onClick={() => setIsMenuOpen(false)}
				></div>
			)}
		</>
	)
}