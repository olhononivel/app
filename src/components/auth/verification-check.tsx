"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { newVerification } from "../../../actions/new-verification";
import logo from "../../../public/images/logo.svg";

const VerificationCheck = () => {
	const searchParams = useSearchParams();
	const token = searchParams.get("token");
	const [isVerification, setIsVerification] = useState(false);

	const onSubmit = useCallback(() => {
		if (isVerification) return;

		if (!token) {
			toast.error("Token inválido");

			return;
		}

		newVerification(token)
			.then((response) => {
				if (response?.error) {
					toast.error(response.error);
				}

				if (response?.success) {
					toast.success(response.success);
					setIsVerification(true);
				}
			})
			.catch(() => {
				toast.error("Erro ao verificar email");
			});
	}, [isVerification, token]);

	useEffect(() => {
		if (!token) {
			return;
		}

		onSubmit();
	}, [token, onSubmit]);

	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="w-full max-w-2xl mx-auto">
				{isVerification ? (
					// Estado de sucesso
					<div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 border border-white/20 p-8 md:p-12 overflow-hidden text-center">
						{/* Background gradient interno */}
						<div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-white to-blue-50 opacity-70"></div>

						<div className="relative z-10">
							{/* Logo com efeito de sucesso */}
							<div className="relative mb-8">
								<Image
									height={900}
									width={900}
									className="w-24 h-24 mx-auto transform-3d hover:scale-110 transition-transform duration-500"
									src={logo}
									alt="Olho no Nível"
								/>
								<div className="absolute -top-3 -right-3 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
									<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
								</div>
							</div>

							{/* Título principal */}
							<h1 className="text-3xl @md:text-4xl @lg:text-5xl font-black mb-6 leading-tight">
								<span className="bg-linear-to-r/oklch from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
									Seja bem-vindo ao
								</span>
								<br />
								<span className="relative inline-block">
									<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
										Olho no Nível
									</span>
									{/* Linha decorativa */}
									<div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-emerald-400 to-blue-500 rounded-full"></div>
								</span>
							</h1>

							{/* Descrição */}
							<p className="text-lg @md:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto">
								Seu email foi verificado com sucesso! Agora você pode monitorar seus dispositivos de onde estiver.
							</p>

							{/* Badges de recursos */}
							<div className="flex flex-wrap justify-center gap-3 mb-8">
								<div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
									<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
									</svg>
									Email Verificado
								</div>
								<div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
									<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
									</svg>
									Acesso Liberado
								</div>
								<div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
									<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
									</svg>
									Monitoramento 24/7
								</div>
							</div>

							{/* Botão CTA */}
							<a
								href="/auth/login"
								className="group inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300"
							>
								<svg className="mr-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
								</svg>
								Fazer Login
							</a>
						</div>
					</div>
				) : (
					// Estado de verificação
					<div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 border border-white/20 p-8 md:p-12 overflow-hidden text-center">
						{/* Background gradient interno */}
						<div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>

						<div className="relative z-10">
							{/* Logo com animação */}
							<div className="relative mb-8">
								<Image
									height={900}
									width={900}
									className="w-24 h-24 mx-auto transform-3d hover:scale-110 transition-transform duration-500 animate-pulse"
									src={logo}
									alt="Olho no Nível"
								/>
								<div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-spin">
									<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
									</svg>
								</div>
							</div>

							{/* Título */}
							<h1 className="text-3xl @md:text-4xl @lg:text-5xl font-black mb-6 leading-tight">
								<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
									Estamos quase lá!
								</span>
								<br />
								<span className="relative inline-block">
									<span className="bg-linear-to-r/oklch from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
										Verificando seu email
									</span>
									{/* Linha animada */}
									<div className="absolute -bottom-2 left-0 h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
								</span>
							</h1>

							{/* Loading animation moderno */}
							<div className="flex justify-center items-center mb-8">
								<div className="flex space-x-2">
									<div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
									<div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
									<div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
								</div>
							</div>

							{/* Mensagem de status */}
							<div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50">
								<div className="flex items-center space-x-3">
									<div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
									<span className="text-blue-700 font-medium">Processando verificação...</span>
								</div>
							</div>

							{/* Informação adicional */}
							<p className="text-gray-600 mt-6 max-w-md mx-auto">
								Este processo pode levar alguns segundos. Mantenha esta página aberta.
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default VerificationCheck;