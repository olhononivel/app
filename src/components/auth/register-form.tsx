"use client";

import { useRef, useState, useTransition } from "react";

import Image from "next/image";
import Link from "next/link";

import { toast } from "react-toastify";
import { register } from "../../../actions/register";
import EyesOff from "../../../public/icons/eye-off.svg";
import EyesOn from "../../../public/icons/eye-on.svg";
import logo from "../../../public/images/logo.svg";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";

interface Errors {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export function RegisterForm() {
	const text = {
		welcome: "Crie sua conta no Olho no Nível!",
		signInWithGoogle: "Cadastre-se com Google",
		orLoginWithEmail: "ou com seu email",
		name: "Nome",
		emailAddress: "Email",
		password: "Senha",
		confirmPassword: "Confirme a senha",
		signIn: "Entrar",
		SignUp: "Cadastre-se",
		successRegister: "Conta criada com sucesso!",
		errorRegister: "Erro ao criar conta",
	};
	const [isPending, startTransition] = useTransition();
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);
	const [errors, setErrors] = useState<Errors>({ name: "", email: "", password: "", confirmPassword: "" });
	const [showPassword, setShowPassword] = useState(false);

	const handleRegister = () => {
		if (!nameRef.current || !emailRef.current || !passwordRef.current) return;

		const dataRegister = {
			name: nameRef.current?.value,
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
		};

		startTransition(() => {
			register(dataRegister)
				.then(({ message, success }) => {
					if (!success) {
						toast.error(message, {
							position: "top-center"
						});
						return;
					}

					toast.success(message, {
						position: "top-center"
					});
				})
				.catch(() => {
					toast.error(text.errorRegister, {
						position: "top-center"
					});
				});
		});
	};

	const handleGoogleLogin = () => {
		signIn("google", {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		});
	};

	const validateName = () => {
		const name = nameRef.current?.value || "";
		if (name.length < 3) {
			setErrors({ name: "Por favor, insira um nome válido.", email: errors.email, password: errors.password, confirmPassword: errors.confirmPassword });
			return false;
		}

		setErrors({ name: "", email: errors.email, password: errors.password, confirmPassword: errors.confirmPassword });
		return true;
	}

	const validateEmail = () => {
		const email = emailRef.current?.value || "";
		if (!/\S+@\S+\.\S+/.test(email)) {
			setErrors({ name: errors.name, email: "Por favor, insira um email válido.", password: errors.password, confirmPassword: errors.confirmPassword });
			return false;
		}
		setErrors({ name: errors.name, email: "", password: errors.password, confirmPassword: errors.confirmPassword });
		return true;
	}

	const validatePassword = () => {
		const password = passwordRef.current?.value || "";
		// senha devera ter minimo de 6 caracteres
		if (password.length < 6) {
			setErrors({
				name: errors.name,
				email: errors.email,
				password: "A senha deve conter no mínimo 6 caracteres.",
				confirmPassword: errors.confirmPassword
			});
			return false;
		}

		setErrors({
			name: errors.name,
			email: errors.email,
			password: "",
			confirmPassword: errors.confirmPassword
		});
		return true
	}

	const validateConfirmPassword = () => {
		const password = passwordRef.current?.value || "";
		const confirmPassword = confirmPasswordRef.current?.value || "";

		if (password !== confirmPassword) {
			setErrors({
				name: errors.name,
				email: errors.email,
				password: errors.password,
				confirmPassword: "As senhas não coincidem."
			});

			return false;
		}

		setErrors({ name: errors.name, email: errors.email, password: errors.password, confirmPassword: "" });
		return true;
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
							<div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
								<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
							</div>
						</div>

						<h1 className="text-2xl @md:text-3xl font-black mb-2">
							<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
								{text.welcome}
							</span>
						</h1>
						<p className="text-gray-600">Comece a monitorar hoje mesmo</p>
					</div>

					{/* Google Login moderno */}
					<button
						onClick={handleGoogleLogin}
						disabled={isPending}
						className="group relative w-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-300 rounded-2xl p-4 mb-6 transition-all duration-300 hover:shadow-lg overflow-hidden"
					>
						<div className="absolute inset-0 bg-linear-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<div className="relative z-10 flex items-center justify-center space-x-3">
							<Image width={24} height={24} src="/icons/google.png" alt="Google" className="group-hover:scale-110 transition-transform duration-300" />
							<span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
								{text.signInWithGoogle}
							</span>
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
					<div className="space-y-5">
						{/* Campo de Nome */}
						<div className="@container">
							<label htmlFor="RegisterName" className="block text-sm font-semibold text-gray-700 mb-2">
								{text.name}
							</label>
							<div className="relative">
								<input
									id="RegisterName"
									ref={nameRef}
									onFocus={() => setErrors({ name: "", email: errors.email, password: "", confirmPassword: errors.confirmPassword })}
									onBlur={validateName}
									className={`w-full px-4 py-4 text-gray-700 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-0 ${errors.name
											? 'border-red-300 focus:border-red-500'
											: 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
										}`}
									type="text"
									placeholder="Seu nome completo"
									disabled={isPending}
								/>
								<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
									<div className="w-2 h-2 bg-green-400 rounded-full opacity-50"></div>
								</div>
							</div>
							{errors.name && (
								<p className="mt-2 text-sm text-red-500 flex items-center">
									<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
									</svg>
									{errors.name}
								</p>
							)}
						</div>

						{/* Campo de Email */}
						<div className="@container">
							<label htmlFor="LoggingEmailAddress" className="block text-sm font-semibold text-gray-700 mb-2">
								{text.emailAddress}
							</label>
							<div className="relative">
								<input
									id="LoggingEmailAddress"
									ref={emailRef}
									onFocus={() => setErrors({ name: errors.name, email: "", password: errors.password, confirmPassword: errors.confirmPassword })}
									onBlur={validateEmail}
									className={`w-full px-4 py-4 text-gray-700 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-0 ${errors.email
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
							{errors.email && (
								<p className="mt-2 text-sm text-red-500 flex items-center">
									<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
									</svg>
									{errors.email}
								</p>
							)}
						</div>

						{/* Campo de Senha */}
						<div className="@container">
							<label htmlFor="loggingPassword" className="block text-sm font-semibold text-gray-700 mb-2">
								{text.password}
							</label>

							<div className="relative">
								<input
									id="loggingPassword"
									ref={passwordRef}
									onFocus={() => setErrors({ name: errors.name, email: errors.email, password: "", confirmPassword: errors.confirmPassword })}
									onBlur={validatePassword}
									className={`w-full px-4 py-4 pr-12 text-gray-700 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-0 ${errors.password
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

							{errors.password && (
								<p className="mt-2 text-sm text-red-500 flex items-center">
									<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
									</svg>
									{errors.password}
								</p>
							)}
						</div>

						{/* Campo de Confirmar Senha */}
						<div className="@container">
							<label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
								{text.confirmPassword}
							</label>

							<div className="relative">
								<input
									id="confirmPassword"
									ref={confirmPasswordRef}
									onFocus={() => setErrors({ name: errors.name, email: errors.email, password: errors.password, confirmPassword: "" })}
									onBlur={validateConfirmPassword}
									className={`w-full px-4 py-4 text-gray-700 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-0 ${errors.confirmPassword
											? 'border-red-300 focus:border-red-500'
											: 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
										}`}
									placeholder="••••••••"
									type="password"
									disabled={isPending}
								/>
								<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
									<div className="w-2 h-2 bg-purple-400 rounded-full opacity-50"></div>
								</div>
							</div>

							{errors.confirmPassword && (
								<p className="mt-2 text-sm text-red-500 flex items-center">
									<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
									</svg>
									{errors.confirmPassword}
								</p>
							)}
						</div>

						{/* Botão de Cadastro moderno */}
						<button
							onClick={handleRegister}
							disabled={isPending}
							className="group relative w-full py-4 px-6 bg-linear-to-r from-green-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
						>
							<span className="relative z-10 flex items-center justify-center">
								{isPending ? (
									<>
										<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
										Criando conta...
									</>
								) : (
									<>
										{text.SignUp}
										<svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</>
								)}
							</span>
							<div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</button>
					</div>

					{/* Link para login */}
					<div className="mt-8 text-center">
						<p className="text-gray-600">
							Já tem uma conta?{" "}
							<Link
								href="/auth/login"
								className="font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300"
							>
								{text.signIn}
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
