"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// faq items questions and answers in portugues br
const faqItems = [
	{
		question: "O que é o Olho no Nível?",
		answer:
			"O Olho no Nível é uma plataforma de monitoramento de dispositivos IoT, que permite acompanhar em tempo real o status de seus dispositivos de monitoramento de nível de água."
	},
	{
		question: "Como faço para adicionar um novo dispositivo?",
		answer:
			"Para adicionar um novo dispositivo, clique no botão 'Adicionar Dispositivo' na página inicial. Em seguida, você será redirecionado para uma página onde poderá buscar pelo código do dispositivo e adicioná-lo à sua conta."
	},
	{
		question: "Como faço para monitorar um dispositivo?",
		answer:
			"Após adicionar o dispositivo à sua conta, você poderá acompanhar em tempo real o nível de água, status da bomba, histórico de dados e receber alertas personalizados diretamente no aplicativo."
	},
	{
		question: "Como faço para remover um dispositivo?",
		answer:
			"Para remover um dispositivo, acesse a página do dispositivo específico, vá até as configurações e clique em 'Remover Dispositivo'. Confirme a remoção quando solicitado."
	},
	{
		question: "Como configurar alertas e notificações?",
		answer:
			"Acesse a página do dispositivo e vá em configurações. Lá você pode definir níveis de alerta (crítico, baixo, alto), tipos de notificação e horários preferenciais para receber os avisos."
	},
	{
		question: "Como faço para entrar em contato?",
		answer:
			"Para entrar em contato conosco, ligue para (62) 9 9650-1729 ou envie um e-mail para suporte@olhononivel.com.br. Nosso horário de atendimento é de segunda a sexta, das 8h às 18h."
	}
];

export const FaqInternal = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="p-6">
			<div className="space-y-3">
				{faqItems.map((item, index) => (
					<div
						key={index}
						className="border border-gray-100 rounded-xl overflow-hidden hover:border-blue-200 transition-colors"
					>
						<button
							onClick={() => toggleFAQ(index)}
							className="flex items-center justify-between w-full p-4 lg:p-5 focus:outline-none hover:bg-gray-50 transition-colors text-left"
						>
							<h3 className="font-semibold text-gray-900 text-sm lg:text-base pr-4">
								{item.question}
							</h3>

							<div className={`transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}>
								<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
								</svg>
							</div>
						</button>

						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={openIndex === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="overflow-hidden"
						>
							<div className="px-4 lg:px-5 pb-4 lg:pb-5">
								<p className="text-sm lg:text-base text-gray-600 leading-relaxed">
									{item.answer}
								</p>
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};
