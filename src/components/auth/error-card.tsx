import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";

const ErrorCard = () => {
	return (
		<div className="@container min-h-screen flex items-center justify-center p-4">
			<div className="w-full max-w-lg mx-auto">
				<div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 border border-white/20 p-8 md:p-12 overflow-hidden text-center">
					{/* Background gradient interno */}
					<div className="absolute inset-0 bg-linear-to-br from-red-50 via-white to-orange-50 opacity-70"></div>

					<div className="relative z-10">
						{/* Logo com ícone de erro */}
						<div className="relative mb-8">
							<Image
								height={900}
								width={900}
								className="w-20 h-20 mx-auto transform-3d hover:scale-110 transition-transform duration-500"
								src={logo}
								alt="Olho no Nível"
							/>
							<div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
								<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</div>
						</div>

						{/* Título do erro */}
						<h1 className="text-4xl @md:text-5xl font-black mb-4">
							<span className="bg-linear-to-r/oklch from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
								Ops...
							</span>
						</h1>

						<h2 className="text-xl @md:text-2xl font-bold text-gray-800 mb-3">
							Ocorreu um erro no login
						</h2>

						<p className="text-gray-600 mb-8 leading-relaxed">
							Desculpe, algo deu errado durante o processo de autenticação. Por favor, tente novamente ou entre em contato se o problema persistir.
						</p>

						{/* Status de erro */}
						<div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-8">
							<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
							</svg>
							Erro de autenticação
						</div>

						{/* Botão para tentar novamente */}
						<Link
							href="/auth/login"
							className="group inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-red-600 to-orange-600 text-white font-semibold rounded-2xl shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-300 mb-8"
						>
							<svg className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
							</svg>
							Tentar novamente
						</Link>

						{/* Informações de ajuda */}
						<div className="p-4 bg-orange-50/80 backdrop-blur-sm rounded-2xl border border-orange-200/50">
							<div className="flex items-start space-x-3">
								<div className="flex-shrink-0">
									<svg className="w-5 h-5 text-orange-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
									</svg>
								</div>
								<div className="text-sm text-orange-700">
									<p className="font-medium">Precisa de ajuda?</p>
									<p className="mt-1">Se o problema persistir, entre em contato com nosso suporte técnico.</p>
								</div>
							</div>
						</div>

						{/* Opções alternativas */}
						<div className="mt-8 space-y-3">
							<p className="text-gray-600 text-sm">Ou tente uma dessas opções:</p>
							<div className="flex flex-col @sm:flex-row gap-3 justify-center">
								<Link
									href="/auth/register"
									className="text-blue-600 hover:text-purple-600 font-medium text-sm transition-colors duration-300"
								>
									Criar nova conta
								</Link>
								<span className="hidden @sm:inline text-gray-300">•</span>
								<Link
									href="/auth/reset"
									className="text-blue-600 hover:text-purple-600 font-medium text-sm transition-colors duration-300"
								>
									Redefinir senha
								</Link>
								<span className="hidden @sm:inline text-gray-300">•</span>
								<Link
									href="/"
									className="text-blue-600 hover:text-purple-600 font-medium text-sm transition-colors duration-300"
								>
									Página inicial
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ErrorCard;
