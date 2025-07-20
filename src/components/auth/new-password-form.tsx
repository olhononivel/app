"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { NewPasswordSchema } from "../../../schemas";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { newPassword } from "../../../actions/new-password";
import EyesOff from "../../../public/icons/eye-off.svg";
import EyesOn from "../../../public/icons/eye-on.svg";
import logo from "../../../public/images/logo.svg";

export function NewPasswordForm() {
	const text = {
		welcome: "Entre com sua nova senha",
		obs: "use uma senha segura",
		labelField: "Nova Senha",
		signIn: "Salvar senha",
		signUp: "Voltar ao login",
		errorNewPassword: "Erro ao efetuar cadastrar nova senha, tente novamente.",
	};

	const searchParams = useSearchParams();
	const token = searchParams.get("token");
	const [showPassword, setShowPassword] = useState(false);

	const form = useForm<z.infer<typeof NewPasswordSchema>>({
		resolver: zodResolver(NewPasswordSchema),
		defaultValues: {
			password: "",
		},
	});

	const [isPending, startTransition] = useTransition();

	const handleLogin = (values: z.infer<typeof NewPasswordSchema>) => {
		startTransition(() => {
			newPassword(values, token)
				.then((response) => {
					if (response?.error) {
						toast.error(response.error);
						return;
					}

					if (response?.success) {
						toast.success(response.success, {
							position: "top-center",
						});

						handleRedirectToLogin();
						return;
					}
				})
				.catch(() => {
					toast.error(text.errorNewPassword);
				});
		});
	};

	const handleRedirectToLogin = () => {
		setTimeout(() => {
			// redireciona o usuário para a página de login
			window.location.href = "/auth/login";
		}, 6000);
	}

	return (
		<div className="@container w-full max-w-md mx-auto">
			<div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-900/10 border border-white/20 p-8 overflow-hidden">
				{/* Background gradient interno */}
				<div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>

				<div className="relative z-10">
					{/* Header moderno */}
					<div className="text-center mb-8">
						<div className="relative mb-6">
							<Image
								height={900}
								width={900}
								className="w-20 h-20 mx-auto transform-3d hover:scale-110 transition-transform duration-500"
								src={logo}
								alt="Olho no Nível"
							/>
							<div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
								<svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
							</div>
						</div>

						<h1 className="text-2xl @md:text-3xl font-black mb-2">
							<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
								{text.welcome}
							</span>
						</h1>
						<p className="text-gray-600">Crie uma senha segura para sua conta</p>
					</div>

					{/* Divider moderno */}
					<div className="relative mb-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-200"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-4 bg-white/90 text-gray-500 font-medium">
								{text.obs}
							</span>
						</div>
					</div>

					{/* Form moderno */}
					<form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
						{/* Campo de Senha */}
						<div className="@container">
							<label htmlFor="NewPasswordField" className="block text-sm font-semibold text-gray-700 mb-2">
								{text.labelField}
							</label>

							<div className="relative">
								<input
									{...form.register("password")}
									id="NewPasswordField"
									className={`w-full px-4 py-4 pr-12 text-gray-700 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-0 ${form.formState.errors.password
											? 'border-red-300 focus:border-red-500'
											: 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
										}`}
									placeholder="••••••••"
									type={showPassword ? "text" : "password"}
									disabled={isPending}
								/>

								<button
									type="button"
									className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-gray-100 transition-colors duration-300"
									onClick={() => setShowPassword(!showPassword)}
								>
									<Image
										height={20}
										width={20}
										src={!showPassword ? EyesOn : EyesOff}
										alt="Mostrar senha"
										className="opacity-60 hover:opacity-100 transition-opacity duration-300"
									/>
								</button>
							</div>

							{form.formState.errors.password && (
								<p className="mt-2 text-sm text-red-500 flex items-center">
									<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
									</svg>
									{form.formState.errors.password?.message}
								</p>
							)}
						</div>

						{/* Botão de Salvar senha moderno */}
						<button
							type="submit"
							disabled={isPending}
							className="group relative w-full py-4 px-6 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
						>
							<span className="relative z-10 flex items-center justify-center">
								{isPending ? (
									<>
										<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
										Salvando...
									</>
								) : (
									<>
										<svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
										{text.signIn}
									</>
								)}
							</span>
							<div className="absolute inset-0 bg-linear-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</button>
					</form>

					{/* Dicas de segurança */}
					<div className="mt-6 p-4 bg-emerald-50/80 backdrop-blur-sm rounded-2xl border border-emerald-200/50">
						<div className="flex items-start space-x-3">
							<div className="flex-shrink-0">
								<svg className="w-5 h-5 text-emerald-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
								</svg>
							</div>
							<div className="text-sm text-emerald-700">
								<p className="font-medium">Dica de segurança</p>
								<p className="mt-1">Use pelo menos 6 caracteres com letras, números e símbolos.</p>
							</div>
						</div>
					</div>

					{/* Link para voltar ao login */}
					<div className="mt-8 text-center">
						<p className="text-gray-600">
							Não quer alterar?{" "}
							<Link
								href="/auth/login"
								className="font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300"
							>
								{text.signUp}
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
