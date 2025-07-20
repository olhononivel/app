"use client";

import { LoginButton } from '@/components/auth/login-button';
import Image from 'next/image';

export function Hero() {
	const scrollToHowItWorks = () => {
		const element = document.getElementById('howItWorks');
		element?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section id="hero" className="@container relative min-h-screen flex items-center justify-center bg-radial-[ellipse_at_top] from-blue-50 via-white to-purple-50 py-20 md:py-24 overflow-hidden">
			{/* Background elements with 3D transforms */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-20 left-10 w-32 h-32 bg-conic-[from_blue-300] rounded-full blur-2xl transform-3d rotate-x-12 rotate-z-45 animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-24 h-24 bg-linear-45/oklch from-purple-300 to-pink-300 rounded-full blur-xl transform-3d rotate-y-12 animate-pulse"></div>
				<div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full blur-lg transform-3d scale-z-2"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 @lg:gap-16 items-center">
					{/* Conteúdo principal */}
					<div className="text-center lg:text-left space-y-6 @container">
						{/* Badge moderno */}
						<div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 backdrop-blur-sm">
							<span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
							<span className="text-sm font-medium text-gray-700">Sistema Online • Monitoramento 24/7</span>
						</div>

						{/* Título com gradiente moderno */}
						<h1 className="text-4xl @sm:text-5xl @lg:text-4xl @xl:text-5xl font-black leading-tight">
							<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
								Monitore o nível da sua
							</span>
							<span className="block bg-linear-45/srgb from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
								caixa d&apos;água
							</span>
							<span className="block text-gray-900 @lg:text-5xl">em tempo real</span>
						</h1>

						{/* Descrição melhorada */}
						<p className="text-lg @sm:text-xl text-gray-600 leading-relaxed max-w-xl @lg:max-w-none">
							Nunca mais fique sem água! Receba alertas inteligentes e monitore
							remotamente através do seu smartphone com nossa tecnologia IoT.
						</p>

						{/* CTAs com design mobile-first */}
						<div className="flex flex-col @sm:flex-row gap-4 pt-4">
							<LoginButton>
								<button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 overflow-hidden">
									<span className="relative z-10 flex items-center justify-center">
										Começar Agora
										<svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</span>
									<div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</button>
							</LoginButton>

							<button
								onClick={scrollToHowItWorks}
								className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-lg"
							>
								<span className="flex items-center justify-center">
									Como Funciona
									<svg className="ml-2 w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</span>
							</button>
						</div>

						{/* Estatísticas com container queries */}
						<div className="@container pt-8">
							<div className="grid grid-cols-3 @md:grid-cols-3 gap-4 @lg:gap-8">
								<div className="text-center @lg:text-left group">
									<div className="text-2xl @sm:text-3xl font-black bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
									<div className="text-xs @sm:text-sm text-gray-600 font-medium">Monitoramento</div>
								</div>
								<div className="text-center @lg:text-left group">
									<div className="text-2xl @sm:text-3xl font-black bg-linear-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100%</div>
									<div className="text-xs @sm:text-sm text-gray-600 font-medium">Sem Fio</div>
								</div>
								<div className="text-center @lg:text-left group">
									<div className="text-2xl @sm:text-3xl font-black bg-linear-to-r from-orange-600 to-red-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">5min</div>
									<div className="text-xs @sm:text-sm text-gray-600 font-medium">Instalação</div>
								</div>
							</div>
						</div>
					</div>

					{/* Imagem moderna com efeitos 3D */}
					<div className="relative @container mt-8 lg:mt-2">
						{/* Container principal da imagem */}
						<div className="relative z-20 transform-3d perspective-distant">
							<div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl shadow-blue-500/10 transform hover:rotate-y-6 transition-transform duration-700 backdrop-blur-sm border border-white/20">
								<Image
									src="/images/water-tank.svg"
									alt="Monitoramento de caixa d'água"
									width={600}
									height={500}
									className="w-full h-auto transform-3d hover:scale-105 transition-transform duration-500"
									priority
								/>

								{/* Indicadores flutuantes */}
								<div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
									Online
								</div>
								<div className="absolute -bottom-2 -left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
									75% Cheio
								</div>
							</div>
						</div>

						{/* Elementos decorativos modernos */}
						<div className="absolute top-4 right-4 w-20 h-20 bg-conic-[from_blue-300] rounded-full opacity-30 blur-xl animate-pulse transform-3d rotate-z-45"></div>
						<div className="absolute bottom-8 left-4 w-16 h-16 bg-radial from-purple-300 to-pink-300 rounded-full opacity-40 blur-lg animate-pulse transform-3d rotate-x-12"></div>
						<div className="absolute top-1/2 -right-8 w-12 h-12 bg-linear-to-br from-cyan-300 to-blue-400 rounded-full opacity-50 blur-md transform-3d scale-z-2"></div>
					</div>
				</div>
			</div>

			{/* Scroll indicator moderno */}
			<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30">
				<button
					onClick={scrollToHowItWorks}
					className="group flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors duration-300"
				>
					<span className="text-xs font-medium mb-2 opacity-75 group-hover:opacity-100">Role para baixo</span>
					<div className="w-6 h-10 border-2 border-current rounded-full flex justify-center group-hover:border-blue-600 transition-colors duration-300">
						<div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce group-hover:bg-blue-600"></div>
					</div>
				</button>
			</div>

			{/* Efeito de partículas (CSS only) */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
				<div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
				<div className="absolute bottom-40 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-2000"></div>
			</div>
		</section>
	);
}
