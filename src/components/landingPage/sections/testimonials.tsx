import Link from "next/link";

export function Testimonials() {
	const testimonials = [
		{
			name: "Maria Silva",
			role: "Proprietária de Casa",
			location: "São Paulo, SP",
			content: "Desde que instalei o Olho no Nível, nunca mais tive problemas com falta de água. O sistema me avisa com antecedência e posso programar o abastecimento. Recomendo para todos!",
			rating: 5,
			avatar: "👩‍💼"
		},
		{
			name: "João Santos",
			role: "Administrador de Condomínio",
			location: "Rio de Janeiro, RJ",
			content: "Gerencio 3 condomínios e o Olho no Nível revolucionou nossa gestão de água. Conseguimos detectar vazamentos rapidamente e economizar muito na conta de água.",
			rating: 5,
			avatar: "👨‍💼"
		},
		{
			name: "Ana Costa",
			role: "Dona de Casa",
			location: "Belo Horizonte, MG",
			content: "Moro em uma região onde falta água frequentemente. Com o monitoramento em tempo real, consigo me organizar melhor e nunca mais fiquei sem água em casa.",
			rating: 5,
			avatar: "👩‍🏫"
		},
		{
			name: "Carlos Oliveira",
			role: "Empresário Rural",
			location: "Goiânia, GO",
			content: "Na fazenda, o controle da água é essencial. O Olho no Nível me permite monitorar todos os reservatórios remotamente. Economizei tempo e dinheiro.",
			rating: 5,
			avatar: "👨‍🌾"
		},
		{
			name: "Fernanda Lima",
			role: "Arquiteta",
			location: "Curitiba, PR",
			content: "Instalação super fácil e interface muito intuitiva. Como arquiteta, aprecio soluções bem projetadas, e o Olho no Nível é exatamente isso.",
			rating: 5,
			avatar: "👩‍🎨"
		},
		{
			name: "Roberto Mendes",
			role: "Aposentado",
			location: "Salvador, BA",
			content: "Aos 68 anos, não consigo mais subir no telhado para verificar a caixa d&apos;água. O Olho no Nível me deu independência e tranquilidade.",
			rating: 5,
			avatar: "👴"
		}
	];

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<svg
				key={index}
				className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
			</svg>
		));
	};

	return (
		<section id="testimonials" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						O que nossos clientes dizem
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Mais de 10.000 clientes satisfeitos já transformaram a gestão da água com o Olho no Nível
					</p>
				</div>

				{/* Estatísticas */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10k+</div>
						<div className="text-gray-600">Clientes Ativos</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9</div>
						<div className="text-gray-600">Avaliação Média</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
						<div className="text-gray-600">Uptime</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
						<div className="text-gray-600">Suporte</div>
					</div>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
						>
							{/* Rating */}
							<div className="flex items-center mb-4">
								{renderStars(testimonial.rating)}
							</div>

							{/* Content */}
							<p className="text-gray-700 mb-6 leading-relaxed">
								&quot;{testimonial.content}&quot;
							</p>

							{/* Author */}
							<div className="flex items-center">
								<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
									{testimonial.avatar}
								</div>
								<div>
									<div className="font-semibold text-gray-900">{testimonial.name}</div>
									<div className="text-sm text-gray-600">{testimonial.role}</div>
									<div className="text-sm text-gray-500">{testimonial.location}</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="mt-16 text-center">
					<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
						<h3 className="text-2xl md:text-3xl font-bold mb-4">
							Junte-se a milhares de clientes satisfeitos
						</h3>
						<p className="text-blue-100 mb-6 max-w-2xl mx-auto">
							Comece hoje mesmo a monitorar sua caixa d&apos;água de forma inteligente e nunca mais se preocupe com falta de água.
						</p>
						<Link href="/auth/login" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
							Começar Agora
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
