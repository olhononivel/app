import { LoginButton } from '@/components/auth/login-button';

export function Cta() {
	return (
		<section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Main CTA */}
				<div className="mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
						Pronto para nunca mais ficar sem água?
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Junte-se a milhares de clientes que já transformaram a gestão da água com o Olho no Nível.
						Comece hoje mesmo e tenha tranquilidade total.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<LoginButton>
							<button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 text-lg">
								Começar Agora - 30% OFF
							</button>
						</LoginButton>

						<div className="text-blue-100 text-sm">
							✓ Instalação gratuita • ✓ Garantia de 30 dias • ✓ Suporte 24/7
						</div>
					</div>
				</div>

				{/* Urgency */}
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
					<div className="flex items-center justify-center mb-4">
						<div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
							<svg className="w-6 h-6 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
							</svg>
						</div>
						<div className="text-left">
							<h3 className="text-xl font-bold text-white">Oferta por tempo limitado!</h3>
							<p className="text-blue-100">30% de desconto nos primeiros 3 meses - Apenas para os primeiros 100 clientes</p>
						</div>
					</div>
				</div>

				{/* Social Proof */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
					<div>
						<div className="text-3xl font-bold text-white mb-2">10.000+</div>
						<div className="text-blue-100">Clientes Satisfeitos</div>
					</div>
					<div>
						<div className="text-3xl font-bold text-white mb-2">4.9/5</div>
						<div className="text-blue-100">Avaliação Média</div>
					</div>
					<div>
						<div className="text-3xl font-bold text-white mb-2">99.9%</div>
						<div className="text-blue-100">Uptime Garantido</div>
					</div>
				</div>

				{/* Final Message */}
				<div className="mt-16 text-center">
					<p className="text-blue-100 text-lg">
						Não deixe para amanhã o que pode resolver hoje.
						<br />
						<span className="font-semibold text-white">Sua tranquilidade não tem preço.</span>
					</p>
				</div>
			</div>
		</section>
	);
}