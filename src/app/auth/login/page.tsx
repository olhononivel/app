import { LoginForm } from "@/components";
import { Suspense } from "react";

// Componente de loading moderno para o Suspense
function LoadingLogin() {
	return (
		<div className="@container w-full max-w-md mx-auto">
			<div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 border border-white/20 p-8 overflow-hidden">
				{/* Background gradient interno */}
				<div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>

				<div className="relative z-10">
					{/* Header */}
					<div className="text-center mb-8">
						<div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 backdrop-blur-sm mb-4">
							<span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
							<span className="text-sm font-medium text-gray-700">Carregando...</span>
						</div>

						<h1 className="text-2xl font-black mb-2">
							<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
								Bem-vindo de volta
							</span>
						</h1>
						<p className="text-gray-600">Aguarde um momento</p>
					</div>

					{/* Loading animation moderno */}
					<div className="flex justify-center items-center py-12">
						<div className="relative">
							{/* Spinner principal */}
							<div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-blue-600"></div>

							{/* Efeito de pulso */}
							<div className="absolute inset-0 w-16 h-16 border-4 border-purple-200 rounded-full animate-ping opacity-75"></div>

							{/* Centro */}
							<div className="absolute inset-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
								<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
							</div>
						</div>
					</div>

					{/* Loading text */}
					<div className="text-center">
						<p className="text-sm text-gray-500 animate-pulse">
							Preparando sua experiência...
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function LogIn() {
	return (
		<Suspense fallback={<LoadingLogin />}>
			<LoginForm />
		</Suspense>
	);
};
