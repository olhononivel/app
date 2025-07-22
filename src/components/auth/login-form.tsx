"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginSchema } from "../../../schemas";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { login } from "../../../actions/login";
import EyesOff from "../../../public/icons/eye-off.svg";
import EyesOn from "../../../public/icons/eye-on.svg";
import logo from "../../../public/images/logo.svg";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";

export function LoginForm() {
	const text = {
		welcome: "Bem vindo ao Olho no Nível!",
		signInWithGoogle: "Entre com Google",
		orLoginWithEmail: "ou seu email",
		emailAddress: "Email",
		password: "Senha",
		forgetPassword: "Esqueceu sua senha?",
		signIn: "Entrar",
		SignUp: "cadastre-se",
		successLogin: "Login efetuado com sucesso!",
		errorLogin: "Erro ao efetuar login, tente novamente.",
	};

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const [isPending, startTransition] = useTransition();
	const [isGoogleLoading, setIsGoogleLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const searchParams = useSearchParams();
	const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
		? "Email já cadastrado, faça login com o email e senha!"
		: "";

	const handleLogin = (dataLogin: z.infer<typeof LoginSchema>) => {
		startTransition(() => {
			login(dataLogin)
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

					// Se não houver erro nem mensagem de sucesso, significa que o login foi bem-sucedido
					// e o redirecionamento será feito automaticamente
					toast.success(text.successLogin);
				})
				.catch((error) => {
					// Ignora o erro de redirecionamento do Next.js
					if (error.message === "NEXT_REDIRECT") {
						return;
					}

					console.error("Erro no login:", error);
					toast.error(text.errorLogin);
				});
		});
	};

	const handleGoogleLogin = () => {
		setIsGoogleLoading(true);
		signIn("google", {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		}).catch((error) => {
			console.error("Erro no login:", error);
		}).finally(() => {
			// Reset loading state after a delay to ensure the redirect happens
			setTimeout(() => {
				setIsGoogleLoading(false);
			}, 2000);
		});
	};

	useEffect(() => {
		if (urlError) {
			toast.error(urlError);
		}
	}, [urlError]);

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
							<div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
								<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
							</div>
						</div>

						<h1 className="text-2xl @md:text-3xl font-black mb-2">
							<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
								{text.welcome}
							</span>
						</h1>
						<p className="text-gray-600">Entre na sua conta</p>
					</div>

					{/* Google Login moderno */}
					<button
						onClick={handleGoogleLogin}
						disabled={isPending || isGoogleLoading}
						className="group relative w-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-300 rounded-2xl p-4 mb-6 transition-all duration-300 hover:shadow-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
					>
						<div className="absolute inset-0 bg-linear-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<div className="relative z-10 flex items-center justify-center space-x-3">
							{isGoogleLoading ? (
								<>
									<div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
									<span className="font-semibold text-gray-700">
										Conectando com Google...
									</span>
								</>
							) : (
								<>
									<Image width={24} height={24} src="/icons/google.png" alt="Google" className="group-hover:scale-110 transition-transform duration-300" />
									<span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
										{text.signInWithGoogle}
									</span>
								</>
							)}
						</div>
					</button>

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
									<div className="w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
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

						{/* Campo de Senha */}
						<div className="@container">
							<div className="flex justify-between items-center mb-2">
								<label htmlFor="loggingPassword" className="block text-sm font-semibold text-gray-700">
									{text.password}
								</label>
								<Link href="/auth/reset" className="text-sm text-blue-600 hover:text-purple-600 font-medium transition-colors duration-300">
									{text.forgetPassword}
								</Link>
							</div>

							<div className="relative">
								<input
									{...form.register("password")}
									id="loggingPassword"
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

						{/* Botão de Login moderno */}
						<button
							type="submit"
							disabled={isPending}
							className="group relative w-full py-4 px-6 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
						>
							<span className="relative z-10 flex items-center justify-center">
								{isPending ? (
									<>
										<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
										Entrando...
									</>
								) : (
									<>
										{text.signIn}
										<svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</>
								)}
							</span>
							<div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</button>
					</form>

					{/* Link para cadastro */}
					<div className="mt-8 text-center">
						<p className="text-gray-600">
							Não tem uma conta?{" "}
							<Link
								href="/auth/register"
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
