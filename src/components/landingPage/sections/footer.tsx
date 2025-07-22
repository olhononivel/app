import Logo from '@/components/logo';
import Link from 'next/link';

export function Footer() {
	return (
		<footer id="contact" className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer */}
				<div className="py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="lg:col-span-2">
							<div className="flex items-center mb-4">
								<Logo isFooter />
							</div>
							<p className="text-gray-300 mb-6 max-w-md">
								Revolucionando o monitoramento de caixas d&apos;água com tecnologia LoRa.
								Nunca mais fique sem água com nosso sistema inteligente de alertas.
							</p>

							{/* Social Links */}
							<div className="flex space-x-4">
								{/* Instagram */}
								<a href="https://www.instagram.com/olhononivel/" target="_blank" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
									</svg>
								</a>
								{/* YouTube */}
								<a href="https://www.youtube.com/@olhononivel" target="_blank" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
									</svg>
								</a>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
							<ul className="space-y-2">
								<li><a href="#howItWorks" className="text-gray-300 hover:text-white transition-colors">Como Funciona</a></li>
								<li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefícios</a></li>
								{/* <li><a href="#prices" className="text-gray-300 hover:text-white transition-colors">Preços</a></li> */}
								<li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
								<li><Link href="/auth/login" className="text-gray-300 hover:text-white transition-colors">Área do Cliente</Link></li>
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Contato</h3>
							<ul className="space-y-2">
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									suporte@olhononivel.com.br
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
									(62) 9 9650-1729
								</li>
								<li className="flex items-start text-gray-300">
									<svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									Goiânia, GO - Brasil
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className="border-t border-gray-800 py-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-gray-400 text-sm mb-4 md:mb-0">
							© {new Date().getFullYear()} Olho no Nível. Todos os direitos reservados.
						</div>
						<div className="flex space-x-6 text-sm">
							<Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link>
							<Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</Link>
							<Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
