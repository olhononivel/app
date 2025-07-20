import { LoginButton } from '@/components/auth/login-button';

export function Prices() {
	const plans = [
		{
			name: "Básico",
			description: "Ideal para residências",
			price: "R$ 89",
			period: "/mês",
			originalPrice: "R$ 129",
			features: [
				"1 sensor de nível",
				"Monitoramento 24/7",
				"Alertas por SMS",
				"App móvel",
				"Suporte por email",
				"Histórico de 30 dias"
			],
			popular: false,
			color: "border-gray-200"
		},
		{
			name: "Profissional",
			description: "Para pequenas empresas",
			price: "R$ 149",
			period: "/mês",
			originalPrice: "R$ 199",
			features: [
				"Até 3 sensores",
				"Monitoramento 24/7",
				"Alertas por SMS e Email",
				"App móvel + Dashboard web",
				"Suporte prioritário",
				"Histórico de 90 dias",
				"Relatórios detalhados",
				"API de integração"
			],
			popular: true,
			color: "border-blue-500"
		},
		{
			name: "Empresarial",
			description: "Para grandes empresas",
			price: "R$ 299",
			period: "/mês",
			originalPrice: "R$ 399",
			features: [
				"Sensores ilimitados",
				"Monitoramento 24/7",
				"Todos os tipos de alertas",
				"Dashboard completo",
				"Suporte 24/7",
				"Histórico ilimitado",
				"Relatórios avançados",
				"API completa",
				"Gerente de conta dedicado",
				"Instalação gratuita"
			],
			popular: false,
			color: "border-gray-200"
		}
	];

	return (
		<section id="prices" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Planos que cabem no seu bolso
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
						Escolha o plano ideal para suas necessidades. Todos incluem instalação gratuita e garantia de 30 dias.
					</p>

					{/* Desconto Banner */}
					<div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
						<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
						</svg>
						30% de desconto nos primeiros 3 meses
					</div>
				</div>

				{/* Plans Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{plans.map((plan, index) => (
						<div
							key={index}
							className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''} hover:shadow-xl transition-all duration-300`}
						>
							{/* Popular Badge */}
							{plan.popular && (
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
										Mais Popular
									</span>
								</div>
							)}

							{/* Plan Header */}
							<div className="text-center mb-8">
								<h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
								<p className="text-gray-600 mb-4">{plan.description}</p>

								<div className="flex items-center justify-center mb-2">
									<span className="text-4xl font-bold text-gray-900">{plan.price}</span>
									<span className="text-gray-600 ml-1">{plan.period}</span>
								</div>

								<div className="flex items-center justify-center">
									<span className="text-sm text-gray-500 line-through mr-2">{plan.originalPrice}</span>
									<span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">30% OFF</span>
								</div>
							</div>

							{/* Features */}
							<ul className="space-y-4 mb-8">
								{plan.features.map((feature, featureIndex) => (
									<li key={featureIndex} className="flex items-start">
										<svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
										<span className="text-gray-700">{feature}</span>
									</li>
								))}
							</ul>

							{/* CTA Button */}
							<LoginButton>
								<button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.popular
										? 'bg-blue-600 text-white hover:bg-blue-700'
										: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
									}`}>
									Começar Agora
								</button>
							</LoginButton>
						</div>
					))}
				</div>

				{/* FAQ Pricing */}
				<div className="bg-white rounded-2xl p-8 shadow-lg">
					<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
						Perguntas Frequentes sobre Preços
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h4 className="font-semibold text-gray-900 mb-2">Posso cancelar a qualquer momento?</h4>
							<p className="text-gray-600">Sim, você pode cancelar seu plano a qualquer momento sem taxas de cancelamento.</p>
						</div>

						<div>
							<h4 className="font-semibold text-gray-900 mb-2">A instalação está incluída?</h4>
							<p className="text-gray-600">Sim, a instalação é gratuita em todos os planos e pode ser feita por você mesmo.</p>
						</div>

						<div>
							<h4 className="font-semibold text-gray-900 mb-2">Há taxa de setup?</h4>
							<p className="text-gray-600">Não cobramos nenhuma taxa de setup ou ativação. Você paga apenas a mensalidade.</p>
						</div>

						<div>
							<h4 className="font-semibold text-gray-900 mb-2">Posso mudar de plano?</h4>
							<p className="text-gray-600">Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento.</p>
						</div>
					</div>
				</div>

				{/* Guarantee */}
				<div className="mt-16 text-center">
					<div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-lg p-6">
						<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div className="text-left">
							<h4 className="font-semibold text-blue-900">Garantia de 30 dias</h4>
							<p className="text-blue-700">Se não ficar satisfeito, devolvemos 100% do seu dinheiro</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
