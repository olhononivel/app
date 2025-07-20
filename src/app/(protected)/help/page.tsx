"use client";

import { FaqInternal } from "@/components/faq";
import Link from "next/link";


// Card de contato moderno
const ContactCard = () => (
	<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mt-8">
		<div className="text-center">
			<div className="p-3 bg-white rounded-full w-fit mx-auto mb-4">
				<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
				</svg>
			</div>

			<h3 className="text-lg font-bold text-gray-900 mb-2">
				Precisa de Ajuda Personalizada?
			</h3>
			<p className="text-gray-600 text-sm mb-4">
				Nossa equipe está pronta para atender você
			</p>

			{/* Opções de contato */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
				<Link
					href="tel:+5562999999999"
					className="flex items-center justify-center gap-2 bg-white text-blue-600 border border-blue-200 px-4 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
				>
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					</svg>
					Ligar Agora
				</Link>

				<Link
					href="mailto:suporte@olhononivel.com.br"
					className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm"
				>
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					Enviar Email
				</Link>
			</div>

			{/* Número de telefone destacado */}
			<div className="mt-4 p-3 bg-white/60 rounded-xl">
				<span className="text-blue-700 font-semibold text-lg">
					(62) 9 9999-9999
				</span>
				<p className="text-blue-600 text-xs mt-1">
					Seg a Sex • 8h às 18h
				</p>
			</div>
		</div>
	</div>
);

export default function Help() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-4xl mx-auto p-4">
				{/* FAQ */}
				<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
					<div className="p-6 border-b border-gray-100">
						<h2 className="text-xl font-bold text-gray-900 mb-2">
							Perguntas Frequentes
						</h2>
						<p className="text-gray-500 text-sm">
							Encontre respostas para as dúvidas mais comuns
						</p>
					</div>
					<FaqInternal />
				</div>

				{/* Card de Contato */}
				<ContactCard />
			</div>
		</div>
	);
};
