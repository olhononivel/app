import Image from "next/image";

import Link from "next/link";
import logo from "../../../public/images/logo.svg";

const terms = {
	title: "Termos e Condições de Uso",
	subTitle: "Leia atentamente os termos e condições de uso do sistema de monitoramento Olho no Nível.",
	sections: [
		{
			title: "1. Aceitação dos Termos",
			content: "Ao acessar e utilizar o sistema de monitoramento Olho no Nível, você concorda com estes Termos e Condições de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços. Estes termos se aplicam a todos os usuários do sistema, incluindo administradores e usuários finais."
		},
		{
			title: "2. Descrição do Serviço",
			content: "O Olho no Nível é um sistema de monitoramento remoto de caixas d'água que utiliza tecnologia IoT (Internet das Coisas) para fornecer dados em tempo real sobre o nível de água, status das bombas e alertas de falhas. O serviço inclui aplicativo web, notificações por email, SMS e WhatsApp, e dashboard de monitoramento."
		},
		{
			title: "3. Cadastro e Conta do Usuário",
			content: "Para utilizar nossos serviços, você deve criar uma conta fornecendo informações verdadeiras, precisas e completas. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem em sua conta. Você deve notificar imediatamente sobre qualquer uso não autorizado de sua conta."
		},
		{
			title: "4. Uso Aceitável",
			content: "Você concorda em utilizar o sistema apenas para fins legítimos de monitoramento de caixas d'água. É proibido: (a) usar o sistema para atividades ilegais; (b) tentar acessar dados de outros usuários sem autorização; (c) interferir no funcionamento do sistema; (d) compartilhar credenciais de acesso; (e) usar o sistema para spam ou atividades maliciosas."
		},
		{
			title: "5. Dispositivos e Instalação",
			content: "Os dispositivos de monitoramento devem ser instalados conforme as instruções fornecidas. A instalação incorreta pode resultar em leituras imprecisas ou mau funcionamento. Você é responsável pela instalação segura e adequada dos dispositivos. Recomendamos a instalação por profissional qualificado quando necessário."
		},
		{
			title: "6. Dados e Privacidade",
			content: "Coletamos dados de monitoramento dos dispositivos, informações de conta e dados de uso do sistema. Esses dados são utilizados para fornecer o serviço de monitoramento, enviar alertas e melhorar nossos serviços. Suas informações pessoais são protegidas conforme nossa Política de Privacidade. Os dados de monitoramento podem ser compartilhados com administradores autorizados do sistema."
		},
		{
			title: "7. Notificações e Alertas",
			content: "O sistema envia notificações automáticas baseadas nos níveis de água e status das bombas. Você pode configurar suas preferências de notificação. Alertas críticos são enviados independentemente das configurações para garantir a segurança. Não nos responsabilizamos por falhas na entrega de notificações devido a problemas de rede ou configurações do usuário."
		},
		{
			title: "8. Limitação de Responsabilidade",
			content: "O Olho no Nível é fornecido 'como está' e 'conforme disponível'. Não garantimos que o serviço será ininterrupto ou livre de erros. Não nos responsabilizamos por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou impossibilidade de uso do sistema, incluindo perda de dados, interrupção de negócios ou danos materiais."
		},
		{
			title: "9. Manutenção e Disponibilidade",
			content: "Realizamos manutenções programadas que podem resultar em interrupções temporárias do serviço. Notificaremos sobre manutenções com antecedência quando possível. O sistema pode estar temporariamente indisponível devido a fatores técnicos ou de rede. Nos esforçamos para manter alta disponibilidade, mas não garantimos 100% de uptime."
		},
		{
			title: "10. Segurança",
			content: "Implementamos medidas de segurança para proteger seus dados e o sistema. No entanto, nenhum sistema é 100% seguro. Você é responsável por manter suas credenciais seguras e por notificar imediatamente sobre qualquer suspeita de violação de segurança. Recomendamos o uso de senhas fortes e autenticação de dois fatores quando disponível."
		},
		{
			title: "11. Propriedade Intelectual",
			content: "Todo o conteúdo, software, design e funcionalidades do Olho no Nível são protegidos por direitos autorais e outras leis de propriedade intelectual. Você não pode copiar, modificar, distribuir ou criar trabalhos derivados sem autorização expressa. O uso do sistema não concede direitos de propriedade sobre nossa tecnologia."
		},
		{
			title: "12. Modificações dos Termos",
			content: "Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entrarão em vigor imediatamente após sua publicação. Continuar a usar o serviço após as modificações constitui aceitação dos novos termos. Notificaremos sobre mudanças significativas através do sistema ou email."
		},
		{
			title: "13. Rescisão",
			content: "Você pode cancelar sua conta a qualquer momento através das configurações do sistema. Podemos suspender ou encerrar sua conta se você violar estes termos ou por qualquer outro motivo a nosso critério. Após o cancelamento, seus dados podem ser mantidos por período determinado por questões legais ou de segurança."
		},
		{
			title: "14. Lei Aplicável",
			content: "Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil. Se qualquer disposição destes termos for considerada inválida, as demais disposições permanecerão em vigor."
		},
		{
			title: "15. Contato",
			content: "Para dúvidas sobre estes Termos e Condições, entre em contato conosco através do email: suporte@olhononivel.com.br ou pelo WhatsApp: (62) 9 9808-4683. Nossa equipe de suporte está disponível para esclarecer qualquer questão sobre o uso do sistema."
		}
	]
};

export default function TermsOfUse() {
	return (
		<div className="bg-gray-50 p-8 md:p-16 text-gray-800 min-h-screen">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<Image
						width={120}
						height={120}
						className="w-auto h-20 mx-auto mb-6"
						src={logo}
						alt="Olho no Nível"
					/>
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{terms.title}</h1>
					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">{terms.subTitle}</p>
				</div>

				{/* Conteúdo dos termos */}
				<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
					{terms.sections.map((section, index) => (
						<div key={index} className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold text-blue-900 border-b border-blue-200 pb-2">
								{section.title}
							</h2>
							<p className="text-gray-700 leading-relaxed text-base md:text-lg">
								{section.content}
							</p>
						</div>
					))}
				</div>

				{/* Footer */}
				<div className="mt-12 text-center">
					<div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
						<h3 className="text-lg font-semibold text-blue-900 mb-2">
							Última atualização
						</h3>
						<p className="text-blue-700 mb-4">
							Estes termos foram atualizados em {new Date().toLocaleDateString('pt-BR')}
						</p>
						<Link
							href="/"
							className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
						>
							<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
							Voltar ao Início
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
