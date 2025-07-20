import Image from 'next/image';

export function HowItWorks() {
	const steps = [
		{
			number: "01",
			title: "Instalação Simples",
			description: "Instale o sensor na sua caixa d&apos;água em apenas 5 minutos. Sem furos, sem complicação.",
			icon: "🔧",
			gradient: "from-blue-500 to-cyan-500"
		},
		{
			number: "02",
			title: "Conexão Automática",
			description: "O dispositivo se conecta automaticamente à rede LoRa e começa a monitorar imediatamente.",
			icon: "📡",
			gradient: "from-purple-500 to-pink-500"
		},
		{
			number: "03",
			title: "Monitoramento 24/7",
			description: "Acompanhe o nível da água em tempo real através do aplicativo no seu smartphone.",
			icon: "📱",
			gradient: "from-green-500 to-emerald-500"
		},
		{
			number: "04",
			title: "Alertas Inteligentes",
			description: "Receba notificações quando o nível estiver baixo ou quando houver algum problema.",
			icon: "🔔",
			gradient: "from-orange-500 to-red-500"
		}
	];

	const features = [
		"Alcance de até 15km em área rural",
		"Baixo consumo de energia - bateria dura anos",
		"Resistente à água e intempéries"
	];

	return (
		<section id="howItWorks" className="@container py-22 bg-linear-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
			{/* Background decorativo */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-10 right-10 w-72 h-72 bg-conic-[from_blue-300] rounded-full blur-3xl"></div>
				<div className="absolute bottom-10 left-10 w-64 h-64 bg-radial from-purple-300 to-pink-300 rounded-full blur-2xl"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header moderno */}
				<div className="text-center mb-20 @container">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 backdrop-blur-sm mb-6">
						<span className="text-sm font-medium text-gray-700">⚙️ Processo Simples</span>
					</div>

					<h2 className="text-3xl @md:text-4xl @lg:text-5xl font-black mb-6">
						<span className="bg-linear-to-r/oklch from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
							Como Funciona o
						</span>
						<span className="block bg-linear-45/srgb from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
							Olho no Nível
						</span>
					</h2>

					<p className="text-lg @md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Um sistema simples e eficiente que revoluciona o monitoramento da sua caixa d&apos;água
					</p>
				</div>

				{/* Steps modernos */}
				<div className="@container mb-20">
					<div className="grid grid-cols-1 @md:grid-cols-2 @xl:grid-cols-4 gap-8 @lg:gap-6">
						{steps.map((step, index) => (
							<div key={index} className="relative group @container">
								<div className="relative h-[340px] flex flex-col justify-between bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-blue-500/10 border border-white/20 transition-all duration-500 hover:-translate-y-3 group-hover:scale-105">
									{/* Número moderno */}
									<div className={`absolute -top-4 left-8 w-12 h-12 bg-linear-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg transform-3d group-hover:rotate-y-12 transition-transform duration-500`}>
										<span className="text-white font-black text-lg">{step.number}</span>
									</div>

									{/* Ícone com efeito 3D */}
									<div className="text-5xl mb-6 mt-4 transform-3d group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
										{step.icon}
									</div>

									{/* Conteúdo */}
									<h3 className="text-xl @lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
										{step.title}
									</h3>
									<p className="text-gray-600 leading-relaxed @lg:text-lg">
										{step.description}
									</p>

									{/* Indicador de progresso */}
									<div className="mt-6 flex items-center">
										<div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
											<div
												className={`h-full bg-linear-to-r ${step.gradient} rounded-full transition-all duration-1000 delay-${index * 200}`}
												style={{ width: '100%' }}
											></div>
										</div>
										<span className="ml-3 text-xs font-semibold text-gray-500">
											Etapa {step.number}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Demonstração visual modernizada */}
				<div className="@container bg-white/90 backdrop-blur-sm rounded-3xl p-8 @lg:p-16 shadow-2xl shadow-gray-900/10 border border-white/20 relative overflow-hidden">
					{/* Background gradient interno */}
					<div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>

					<div className="relative z-10 grid grid-cols-1 @lg:grid-cols-2 gap-12 items-center">
						<div className="@container">
							<div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 border border-green-200/50 backdrop-blur-sm mb-6">
								<span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
								<span className="text-sm font-medium text-gray-700">Tecnologia Avançada</span>
							</div>

							<h3 className="text-2xl @md:text-3xl @lg:text-4xl font-black mb-8">
								<span className="bg-linear-to-r/oklch from-gray-900 via-green-800 to-blue-900 bg-clip-text text-transparent">
									Tecnologia LoRa de
								</span>
								<span className="block bg-linear-45/srgb from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
									Longo Alcance
								</span>
							</h3>

							<div className="space-y-6">
								{features.map((feature, index) => (
									<div key={index} className="flex items-start space-x-4 group">
										<div className="w-10 h-10 bg-linear-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
											<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
											</svg>
										</div>
										<p className="text-gray-700 font-medium text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
											{feature}
										</p>
									</div>
								))}
							</div>

							{/* CTA */}
							<div className="mt-8">
								<button className="group px-6 py-3 bg-linear-to-r from-green-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300">
									<span className="flex items-center">
										Ver Especificações
										<svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</span>
								</button>
							</div>
						</div>

						{/* Imagem com efeitos modernos */}
						<div className="relative @container">
							<div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl shadow-blue-500/10 transform-3d perspective-distant hover:rotate-y-6 transition-transform duration-700 backdrop-blur-sm border border-white/20">
								<Image
									src="/images/water-tank.svg"
									alt="Tecnologia LoRa"
									width={500}
									height={400}
									className="w-full h-auto transform-3d hover:scale-105 transition-transform duration-500"
								/>

								{/* Indicadores flutuantes */}
								<div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
									LoRa
								</div>
								<div className="absolute -bottom-2 -left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
									15km Range
								</div>
							</div>

							{/* Elementos decorativos */}
							<div className="absolute top-4 right-4 w-20 h-20 bg-conic-[from_green-300] rounded-full opacity-30 blur-xl animate-pulse transform-3d rotate-z-45"></div>
							<div className="absolute bottom-8 left-4 w-16 h-16 bg-radial from-blue-300 to-purple-300 rounded-full opacity-40 blur-lg animate-pulse transform-3d rotate-x-12"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
