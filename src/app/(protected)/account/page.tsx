"use client";

import { useSession } from "@/contexts/sessionContext";
import useAuth from "@/hooks/auth/useAuth";
import { formatPhoneDisplay, formatPhoneInput } from "@/lib/phone";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../../../actions/update-user-profile";
import { UpdateUserProfileType } from "../../../../schemas";

export default function Account() {
	const session = useSession();
	const router = useRouter();
	const { handleSignOut } = useAuth();
	const [isPending, startTransition] = useTransition();

	// Estados do formulário
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		phone: "",
	});

	// Carrega dados do usuário quando a sessão estiver disponível
	useEffect(() => {
		if (session?.user) {
			setFormData({
				name: session.user.name || "",
				phone: session.user.phone ? formatPhoneDisplay(session.user.phone) : "",
			});
		}
	}, [session]);

	// Manipula mudanças no campo de telefone com máscara
	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formatted = formatPhoneInput(e.target.value);
		setFormData({ ...formData, phone: formatted });

		// Limpa erro quando usuário começa a digitar
		if (errors.phone) {
			setErrors({ ...errors, phone: "" });
		}
	};

	// Manipula mudanças no campo de nome
	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, name: e.target.value });

		// Limpa erro quando usuário começa a digitar
		if (errors.name) {
			setErrors({ ...errors, name: "" });
		}
	};

	// Submete o formulário
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Limpa erros
		setErrors({ name: "", phone: "" });

		const submitData: UpdateUserProfileType = {
			name: formData.name || undefined,
			phone: formData.phone || undefined,
		};

		startTransition(async () => {
			try {
				const result = await updateUserProfile(submitData);

				if (result.success) {
					toast.success(result.message);
					// Recarrega a página para atualizar os dados da sessão
					router.refresh();
				} else {
					toast.error(result.error);
				}
			} catch (error) {
				console.error("Erro ao salvar:", error);
				toast.error("Erro interno do servidor");
			}
		});
	};

	return (
		<div className="@container relative min-h-screen bg-radial-[ellipse_at_top] from-blue-50 via-white to-purple-50 overflow-hidden">
			{/* Background decorativo moderno */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-10 right-10 w-72 h-72 bg-conic-[from_blue-300] rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-10 left-10 w-64 h-64 bg-linear-45/oklch from-purple-300 to-pink-300 rounded-full blur-2xl animate-pulse"></div>
				<div className="absolute top-1/2 left-1/4 w-32 h-32 bg-radial from-cyan-200 to-blue-300 rounded-full blur-xl transform-3d rotate-z-45"></div>
			</div>

			{/* Efeito de partículas */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
				<div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
				<div className="absolute bottom-40 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-2000"></div>
				<div className="absolute bottom-60 right-40 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-3000"></div>
			</div>

			{/* Container principal do painel */}
			<div className="relative z-10 w-full min-h-screen">
				{/* Header do painel */}
				<div className="@container px-4 @lg:px-8 pt-8 pb-6">
					<div className="max-w-7xl mx-auto">
						{/* Breadcrumb/Navigation */}
						<div className="flex items-center text-sm text-gray-500 mb-4">
							<span className="font-medium">Painel</span>
							<svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
							<span className="text-gray-700 font-medium">Configurações da Conta</span>
						</div>

						{/* Header principal */}
						<div className="flex flex-col @lg:flex-row @lg:items-center @lg:justify-between">
							<div>
								{/* Badge de status */}
								<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200/50 backdrop-blur-sm mb-3">
									<span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
									<span className="text-xs font-medium text-gray-700">Conta Ativa</span>
								</div>

								{/* Título principal */}
								<h1 className="text-2xl @lg:text-3xl @xl:text-4xl font-black mb-2">
									<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
										Configurações da Conta
									</span>
								</h1>
								<p className="text-lg text-gray-600 max-w-2xl">
									Gerencie suas informações pessoais, preferências de notificação e configurações de segurança
								</p>
							</div>

							{/* User Avatar Card */}
							<div className="mt-6 @lg:mt-0">
								<div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-lg">
									<div className="flex items-center space-x-3">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
											<span className="text-white font-bold text-lg">
												{session?.user?.name?.charAt(0)?.toUpperCase() || 'U'}
											</span>
										</div>
										<div>
											<p className="font-semibold text-gray-900">{session?.user?.name || 'Usuário'}</p>
											<p className="text-sm text-gray-500 truncate max-w-40">{session?.user?.email}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Conteúdo principal em grid */}
				<div className="px-4 @lg:px-8 pb-8">
					<div className="max-w-7xl mx-auto">
						{/* Grid principal do painel */}
						<div className="grid grid-cols-1 @lg:grid-cols-12 gap-6">
							{/* Sidebar com navegação */}
							<div className="@lg:col-span-3">
								<div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-900/10 border border-white/20 p-6 sticky top-6">
									<h3 className="text-lg font-bold text-gray-900 mb-4">Configurações</h3>

									{/* Menu de navegação */}
									<nav className="space-y-2">
										<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-200/50">
											<div className="flex items-center">
												<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
													<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
													</svg>
												</div>
												<span className="font-medium text-gray-700">Perfil</span>
											</div>
										</div>

										<div className="rounded-xl p-3 hover:bg-gray-50/50 transition-colors cursor-pointer">
											<div className="flex items-center">
												<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
													<svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 0 0-15 0v5h5l-5 5-5-5h5V7a9.5 9.5 0 0 1 19 0v10z" />
													</svg>
												</div>
												<span className="font-medium text-gray-600">Notificações</span>
											</div>
										</div>

										<div className="rounded-xl p-3 hover:bg-gray-50/50 transition-colors cursor-pointer">
											<div className="flex items-center">
												<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
													<svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
													</svg>
												</div>
												<span className="font-medium text-gray-600">Segurança</span>
											</div>
										</div>
									</nav>

									{/* Quick stats */}
									<div className="mt-6 pt-6 border-t border-gray-200/50">
										<h4 className="text-sm font-semibold text-gray-700 mb-3">Status da Conta</h4>
										<div className="space-y-3">
											<div className="flex items-center justify-between">
												<span className="text-xs text-gray-500">Dispositivos</span>
												<span className="text-xs font-semibold text-green-600">3 Ativos</span>
											</div>
											<div className="flex items-center justify-between">
												<span className="text-xs text-gray-500">Último acesso</span>
												<span className="text-xs font-semibold text-gray-700">Agora</span>
											</div>
											<div className="flex items-center justify-between">
												<span className="text-xs text-gray-500">Plano</span>
												<span className="text-xs font-semibold text-blue-600">Pro</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Conteúdo principal */}
							<div className="@lg:col-span-9">
								<div className="space-y-6">
									{/* Seção: Informações Pessoais */}
									<div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-900/10 border border-white/20 overflow-hidden">
										{/* Background gradient interno */}
										<div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-white to-purple-50/50"></div>

										<div className="relative z-10 p-6 @lg:p-8">
											{/* Header da seção */}
											<div className="flex items-center justify-between mb-6">
												<div className="flex items-center">
													<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
														<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
														</svg>
													</div>
													<div>
														<h2 className="text-xl @lg:text-2xl font-bold text-gray-900">Informações Pessoais</h2>
														<p className="text-sm text-gray-600">Atualize seus dados básicos e informações de contato</p>
													</div>
												</div>
												<div className="hidden @lg:block">
													<span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
														Seção Ativa
													</span>
												</div>
											</div>

											{/* Grid do formulário */}
											<form onSubmit={handleSubmit}>
												<div className="grid grid-cols-1 @lg:grid-cols-2 gap-6 mb-8">
													{/* Campo Nome */}
													<div className="@container">
														<label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
															Nome Completo
														</label>
														<div className="relative">
															<input
																type="text"
																id="name"
																value={formData.name}
																onChange={handleNameChange}
																className={`w-full px-4 py-4 text-gray-700 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-0 ${errors.name
																	? 'border-red-300 focus:border-red-500'
																	: 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
																	}`}
																placeholder="Digite seu nome completo"
															/>
															<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
																<div className="w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
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

													{/* Campo Telefone */}
													<div className="@container">
														<label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
															Telefone WhatsApp
														</label>
														<div className="relative">
															<input
																type="tel"
																id="phone"
																value={formData.phone}
																onChange={handlePhoneChange}
																className={`w-full px-4 py-4 text-gray-700 bg-white/80 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-0 ${errors.phone
																	? 'border-red-300 focus:border-red-500'
																	: 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
																	}`}
																placeholder="11 9 1234-5678"
																maxLength={14}
															/>
															<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
																<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4" />
																</svg>
															</div>
														</div>
														<p className="mt-2 text-xs text-gray-500">
															Formato: DD 9 XXXX-XXXX (DDD + número do celular)
														</p>
														{errors.phone && (
															<p className="mt-2 text-sm text-red-500 flex items-center">
																<svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
																	<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
																</svg>
																{errors.phone}
															</p>
														)}
													</div>
												</div>

												{/* Botões de ação */}
												<div className="flex flex-col @sm:flex-row gap-3">
													<button
														type="submit"
														disabled={isPending}
														className="group relative flex-1 py-4 px-6 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
													>
														<span className="relative z-10 flex items-center justify-center">
															{isPending ? (
																<>
																	<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
																	Salvando...
																</>
															) : (
																<>
																	Salvar Alterações
																	<svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
																	</svg>
																</>
															)}
														</span>
														<div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
													</button>
												</div>
											</form>
										</div>
									</div>

									{/* Seção: Status da Conta */}
									{session?.user && (
										<div className="relative bg-gradient-to-br from-gray-50 to-slate-50 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-6 @lg:p-8 overflow-hidden">
											<div className="relative z-10">
												<div className="flex items-center justify-between mb-6">
													<div className="flex items-center">
														<div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-slate-600 rounded-xl flex items-center justify-center mr-3">
															<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
															</svg>
														</div>
														<div>
															<h3 className="text-lg @lg:text-xl font-bold text-gray-800">Status da Conta</h3>
															<p className="text-sm text-gray-600">Informações atuais do seu perfil</p>
														</div>
													</div>
													<span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
														Verificado
													</span>
												</div>

												<div className="grid grid-cols-1 @md:grid-cols-3 gap-4">
													<div className="bg-white/50 rounded-2xl p-4">
														<div className="text-xs text-gray-500 font-medium mb-1">EMAIL</div>
														<div className="text-sm font-semibold text-gray-800 truncate">
															{session.user.email}
														</div>
													</div>
													<div className="bg-white/50 rounded-2xl p-4">
														<div className="text-xs text-gray-500 font-medium mb-1">NOME</div>
														<div className="text-sm font-semibold text-gray-800">
															{session.user.name || "Não informado"}
														</div>
													</div>
													<div className="bg-white/50 rounded-2xl p-4">
														<div className="text-xs text-gray-500 font-medium mb-1">WHATSAPP</div>
														<div className="text-sm font-semibold text-gray-800">
															{session.user.phone
																? formatPhoneDisplay(session.user.phone)
																: "Não configurado"
															}
														</div>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Footer de ações */}
						<div className="mt-8 pt-6 border-t border-white/20">
							<div className="flex flex-col @sm:flex-row gap-4">
								<button
									type="button"
									onClick={handleSignOut}
									className="group relative px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-red-200 text-red-600 font-semibold rounded-2xl hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
								>
									<span className="relative z-10 flex items-center justify-center">
										<svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
										</svg>
										Sair da Conta
									</span>
									<div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</button>

								<div className="flex-1 text-right">
									<p className="text-sm text-gray-500">
										Última atualização: {new Date().toLocaleDateString('pt-BR')}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
