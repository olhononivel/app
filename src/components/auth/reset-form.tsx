"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ResetPassSchema } from "../../../schemas";

import Link from "next/link";
import { toast } from "react-toastify";
import { reset } from "../../../actions/reset";
import logo from "../../../public/images/logo.svg";

export function ResetForm() {
	const text = {
		welcome: "Esqueceu sua senha?",
		orLoginWithEmail: "insira seu email",
		emailAddress: "Email",
		signIn: "Resetar senha",
		SignUp: "Voltar ao login",
		successLogin: "Login efetuado com sucesso!",
		errorLogin: "Erro ao efetuar login, tente novamente.",
	};

	const form = useForm<z.infer<typeof ResetPassSchema>>({
		resolver: zodResolver(ResetPassSchema),
		defaultValues: {
			email: "",
		},
	});

	const [isPending, startTransition] = useTransition();

	const handleLogin = (dataLogin: z.infer<typeof ResetPassSchema>) => {
		startTransition(() => {
			reset(dataLogin)
				.then((response) => {
					if (response?.error) {
						toast.error(response.error);
						return;
					}

					if (response?.success) {
						toast.success(response.success, {
							autoClose: 6000,
							position: "top-center",
							type: "info"
						});
						return;
					}
				})
				.catch(() => {
					toast.error(text.errorLogin);
				});
		});
	};

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
							<div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
								<svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
								</svg>
							</div>
						</div>

						<h1 className="text-2xl @md:text-3xl font-black mb-2">
							<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
								{text.welcome}
							</span>
						</h1>
						<p className="text-gray-600">Vamos te ajudar a recuperar o acesso</p>
					</div>

					{/* Divider moderno */}
					<div className="relative mb-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-200"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-4 bg-white/90 text-gray-500 font-medium">
								{text.orLoginWithEmail}
							</span>
						</div>
					</div>

					{/* Form moderno */}
					<form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
						{/* Campo de Email */}
						<div className="@container">
							<label htmlFor="LoggingEmailAddress" className="block text-sm font-semibold text-gray-700 mb-2">
								{text.emailAddress}
							</label>
							<div className="relative">
								<input
									{...form.register("email")}
									id="LoggingEmailAddress"
									className={`w-full px-4 py-4 text-gray-700 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-0 ${form.formState.errors.email
										? 'border-red-300 focus:border-red-500'
										: 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
										}`}
									type="email"
									placeholder="seu@email.com"
									disabled={isPending}
								/>
								<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
									<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
							</div>
							{form.formState.errors.email && (
								<p className="mt-2 text-sm text-red-500 flex items-center">
									<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
									</svg>
									{form.formState.errors.email?.message}
								</p>
							)}
						</div>

						{/* Botão de Reset moderno */}
						<button
							type="submit"
							disabled={isPending}
							className="group relative w-full py-4 px-6 bg-linear-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
						>
							<span className="relative z-10 flex items-center justify-center">
								{isPending ? (
									<>
										<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
										Enviando email...
									</>
								) : (
									<>
										<svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
										</svg>
										{text.signIn}
									</>
								)}
							</span>
							<div className="absolute inset-0 bg-linear-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</button>
					</form>

					{/* Informações de ajuda */}
					<div className="mt-6 p-4 bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50">
						<div className="flex items-start space-x-3">
							<div className="flex-shrink-0">
								<svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
								</svg>
							</div>
							<div className="text-sm text-blue-700">
								<p className="font-medium">Não recebeu o email?</p>
								<p className="mt-1">Verifique sua caixa de spam ou tente novamente em alguns minutos.</p>
							</div>
						</div>
					</div>

					{/* Link para voltar ao login */}
					<div className="mt-8 text-center">
						<p className="text-gray-600">
							Lembrou da senha?{" "}
							<Link
								href="/auth/login"
								className="font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300"
							>
								{text.SignUp}
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
