import Link from "next/link";

export function Benefits() {
	const benefits = [
		{
			title: "Economia de Água",
			description: "Evite desperdícios e reduza sua conta de água monitorando o consumo em tempo real.",
			icon: "💧",
			color: "from-blue-500 to-cyan-500",
			stats: "Até 30% economia",
			route: "/benefits/economia-agua"
		},
		{
			title: "Tranquilidade Total",
			description: "Nunca mais se preocupe em ficar sem água. Receba alertas antes que isso aconteça.",
			icon: "🛡️",
			color: "from-green-500 to-emerald-500",
			stats: "Alertas 24/7",
			route: "/benefits/tranquilidade"
		},
		{
			title: "Instalação Fácil",
			description: "Sem necessidade de técnico especializado. Instale você mesmo em poucos minutos.",
			icon: "⚡",
			color: "from-yellow-500 to-orange-500",
			stats: "5 min setup",
			route: "/benefits/instalacao-facil"
		},
		{
			title: "Monitoramento Remoto",
			description: "Acompanhe sua caixa d'água de qualquer lugar através do aplicativo móvel.",
			icon: "📱",
			color: "from-purple-500 to-pink-500",
			stats: "Acesso global",
			route: "/benefits/monitoramento-remoto"
		},
		{
			title: "Alertas Inteligentes",
			description: "Notificações personalizadas por SMS, email ou push notification no app.",
			icon: "🔔",
			color: "from-red-500 to-rose-500",
			stats: "Multi-canais",
			route: "/benefits/alertas-inteligentes"
		},
		{
			title: "Histórico Completo",
			description: "Acesse relatórios detalhados do consumo e identifique padrões de uso.",
			icon: "📊",
			color: "from-indigo-500 to-blue-500",
			stats: "Dados ilimitados",
			route: "/benefits/historico-completo"
		}
	];

	return (
		<section id="benefits" className="@container py-20 bg-radial-[ellipse_at_bottom] from-gray-50 via-white to-blue-50 relative overflow-hidden">
			{/* Background decorativo */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10 w-40 h-40 bg-conic-[from_blue-300] rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-32 h-32 bg-linear-45/oklch from-purple-300 to-pink-300 rounded-full blur-2xl"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header moderno */}
				<div className="text-center mb-16 @container">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 backdrop-blur-sm mb-6">
						<span className="text-sm font-medium text-gray-700">✨ Vantagens Exclusivas</span>
					</div>

					<h2 className="text-3xl @md:text-4xl @lg:text-5xl font-black mb-6">
						<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
							Por que escolher o
						</span>
						<span className="block bg-linear-45/srgb from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
							Olho no Nível?
						</span>
					</h2>

					<p className="text-lg @md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Descubra como nossa solução pode transformar a gestão da água na sua residência ou empresa
					</p>
				</div>

				{/* Benefits Grid moderno */}
				<div className="@container mb-16">
					<div className="grid grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 gap-6 @lg:gap-8">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 @lg:p-8 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-blue-500/10 border border-white/20 transition-all duration-500 hover:-translate-y-2 @container"
							>
								{/* Gradiente de fundo no hover */}
								<div className={`absolute inset-0 bg-linear-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

								{/* Ícone moderno */}
								<div className="relative mb-6">
									<div className={`w-16 h-16 @lg:w-20 @lg:h-20 rounded-2xl bg-linear-to-br ${benefit.color} flex items-center justify-center text-2xl @lg:text-3xl mb-4 transform-3d group-hover:rotate-y-12 transition-transform duration-500 shadow-lg`}>
										{benefit.icon}
									</div>
									<div className="absolute -top-2 -right-2 bg-green-500 w-4 h-4 rounded-full animate-pulse"></div>
								</div>

								{/* Conteúdo */}
								<div className="relative z-10">
									<div className="flex items-center justify-between mb-3">
										<h3 className="text-xl @lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
											{benefit.title}
										</h3>
										<span className={`text-xs font-bold px-2 py-1 rounded-full bg-linear-to-r ${benefit.color} text-white opacity-80`}>
											{benefit.stats}
										</span>
									</div>

									<p className="text-gray-600 leading-relaxed mb-4 @lg:text-lg">
										{benefit.description}
									</p>

									{/* CTA sutil */}
									<Link
										href={benefit.route}
										className="group/btn flex items-center text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300"
									>
										Saiba mais
										<svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Comparação modernizada */}
				<div className="@container bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-gray-900/10 overflow-hidden border border-white/20">
					{/* Header com gradiente */}
					<div className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center py-12 relative overflow-hidden">
						<div className="absolute inset-0 bg-conic-[from_blue-400] opacity-20"></div>
						<div className="relative z-10">
							<h3 className="text-2xl @md:text-3xl @lg:text-4xl font-black mb-4">
								Antes vs Depois do Olho no Nível
							</h3>
							<p className="text-blue-100 text-lg max-w-2xl mx-auto">
								Veja a diferença que nossa solução faz no seu dia a dia
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 @lg:grid-cols-2">
						{/* Antes - Redesigned */}
						<div className="p-8 @lg:p-12 @lg:border-r border-gray-200">
							<div className="text-center mb-8">
								<div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform-3d hover:rotate-y-12 transition-transform duration-500">
									<span className="text-3xl">😰</span>
								</div>
								<h4 className="text-2xl font-bold text-gray-900 mb-2">Sem o Olho no Nível</h4>
								<p className="text-gray-600">Problemas do dia a dia</p>
							</div>

							<ul className="space-y-4">
								{[
									"Subir no telhado para verificar o nível",
									"Ficar sem água sem aviso",
									"Desperdício de água por vazamentos",
									"Preocupação constante"
								].map((item, index) => (
									<li key={index} className="flex items-start space-x-4 group">
										<div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
											<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
											</svg>
										</div>
										<span className="text-gray-700 font-medium">{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Depois - Redesigned */}
						<div className="p-8 @lg:p-12 bg-gradient-to-br from-green-50 to-blue-50">
							<div className="text-center mb-8">
								<div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform-3d hover:rotate-y-12 transition-transform duration-500">
									<span className="text-3xl">😊</span>
								</div>
								<h4 className="text-2xl font-bold text-gray-900 mb-2">Com o Olho no Nível</h4>
								<p className="text-gray-600">Solução completa</p>
							</div>

							<ul className="space-y-4">
								{[
									"Monitoramento pelo smartphone",
									"Alertas antes de acabar a água",
									"Detecção automática de vazamentos",
									"Tranquilidade total"
								].map((item, index) => (
									<li key={index} className="flex items-start space-x-4 group">
										<div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
											<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
											</svg>
										</div>
										<span className="text-gray-700 font-medium">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
