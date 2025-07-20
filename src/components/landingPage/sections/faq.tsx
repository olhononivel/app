"use client";

import { useState } from 'react';

export function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const faqs = [
		{
			question: "Como funciona o sensor do Olho no Nível?",
			answer: "O sensor utiliza tecnologia ultrassônica para medir a distância até a superfície da água, calculando assim o nível exato. Os dados são transmitidos via LoRa para nossa central de monitoramento e depois enviados para seu smartphone em tempo real."
		},
		{
			question: "A instalação é realmente fácil?",
			answer: "Sim! O sensor é fixado na tampa da caixa d'água sem necessidade de furos ou ferramentas especiais. Todo o processo leva cerca de 5 minutos e vem com um manual ilustrado passo a passo."
		},
		{
			question: "Qual é o alcance da tecnologia LoRa?",
			answer: "A tecnologia LoRa tem alcance de até 15km em áreas rurais e 2-5km em áreas urbanas. Isso garante conectividade mesmo em locais remotos, sem depender de WiFi ou internet local."
		},
		{
			question: "O sensor funciona em qualquer tipo de caixa d'água?",
			answer: "Sim, nosso sensor é compatível com caixas d'água de fibra, polietileno, concreto e aço inox. Funciona em reservatórios de 500L até 10.000L."
		},
		{
			question: "Quanto tempo dura a bateria?",
			answer: "A bateria do sensor dura em média 3-5 anos, dependendo da frequência de transmissão configurada. Quando a bateria estiver baixa, você receberá um alerta com 30 dias de antecedência."
		},
		{
			question: "Posso monitorar múltiplas caixas d'água?",
			answer: "Sim! Dependendo do seu plano, você pode monitorar de 1 a ilimitadas caixas d'água. Cada sensor aparece separadamente no aplicativo com seu próprio nome e configurações."
		},
		{
			question: "O que acontece se eu ficar sem internet?",
			answer: "O sensor não depende da sua internet local. Ele usa a rede LoRa que é independente. Os dados ficam armazenados e são sincronizados assim que a conectividade for restabelecida."
		},
		{
			question: "Posso personalizar os alertas?",
			answer: "Sim! Você pode configurar alertas para diferentes níveis (crítico, baixo, normal, alto), escolher o tipo de notificação (SMS, email, push) e definir horários específicos para receber os alertas."
		},
		{
			question: "O sensor é resistente à chuva e sol?",
			answer: "Sim, o sensor tem classificação IP67, sendo totalmente resistente à água, poeira, chuva, sol e variações de temperatura. Foi projetado para funcionar em ambientes externos."
		},
		{
			question: "Há garantia do produto?",
			answer: "Oferecemos 2 anos de garantia para o hardware e 30 dias de garantia de satisfação. Se não ficar satisfeito, devolvemos 100% do valor pago."
		}
	];

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section id="faq" className="py-20 bg-white">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Perguntas Frequentes
					</h2>
					<p className="text-xl text-gray-600">
						Tire suas dúvidas sobre o Olho no Nível
					</p>
				</div>

				{/* FAQ Items */}
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
						>
							<button
								className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
								onClick={() => toggleFaq(index)}
							>
								<span className="font-semibold text-gray-900 pr-4">
									{faq.question}
								</span>
								<svg
									className={`w-5 h-5 text-gray-500 transform transition-transform ${openIndex === index ? 'rotate-180' : ''
										}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
								</svg>
							</button>

							{openIndex === index && (
								<div className="px-6 pb-4">
									<p className="text-gray-700 leading-relaxed">
										{faq.answer}
									</p>
								</div>
							)}
						</div>
					))}
				</div>

				{/* Contact Support */}
				<div className="mt-16 text-center">
					<div className="bg-blue-50 rounded-2xl p-8">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Ainda tem dúvidas?
						</h3>
						<p className="text-gray-600 mb-6">
							Nossa equipe de suporte está pronta para ajudar você
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="mailto:suporte@olhononivel.com.br"
								className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
							>
								<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								Enviar Email
							</a>
							<a
								href="https://wa.me/5511999999999"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
							>
								<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
								</svg>
								WhatsApp
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
