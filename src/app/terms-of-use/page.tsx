import Image from "next/image";
import React from "react";

import servo from "../../../public/icons/reindeer.svg";
import Link from "next/link";

const terms = {
	title: "Termos e Condições de uso",
	subTitle: "Leia atentamente os termos e condições de uso do nosso site de sorteio de amigo secreto.",
	sections: [
		{
			title: "1. Introdução",
			content: "Estes Termos e Condições regem o uso do nosso site de sorteio de amigo secreto. Ao acessar ou usar o site, você concorda com estes termos. Caso discorde de qualquer parte dos termos, não deve usar o serviço."
		},
		{
			title: "2. Uso do Serviço",
			content: "Nosso serviço é oferecido para facilitar o sorteio de amigo secreto entre grupos de pessoas. Você concorda em utilizar o site apenas para os fins destinados e de maneira ética e legal."
		},
		{
			title: "3. Privacidade dos Dados",
			content: "Coletamos e processamos informações pessoais de acordo com nossa Política de Privacidade. As informações coletadas são usadas exclusivamente para realizar o sorteio de amigo secreto e não serão compartilhadas com terceiros sem consentimento."
		},
		{
			title: "4. Responsabilidade do Usuário",
			content: "Você é responsável por manter a confidencialidade dos dados e senhas usados para acessar o serviço. Não nos responsabilizamos por qualquer perda ou dano resultante do uso indevido da sua conta."
		},
		{
			title: "5. Limitação de Responsabilidade",
			content: "Não seremos responsáveis por quaisquer danos indiretos, incidentais, ou consequenciais resultantes do uso ou da impossibilidade de uso do serviço."
		},
		{
			title: "6. Alterações nos Termos",
			content: "Reservamo-nos o direito de atualizar estes Termos e Condições a qualquer momento. As mudanças entrarão em vigor após serem publicadas no site."
		},
		{
			title: "7. Contato",
			content: "Se tiver dúvidas sobre estes Termos e Condições, entre em contato conosco através do email: contato@amigosecreto.com."
		}
	]
};

export default function TermsOfUse() {
	return (
		<div className="bg-gray-50 p-16 text-gray-800 min-h-screen flex flex-col items-center justify-center">
			<Image width={80} height={80} className="w-auto h-40" src={servo} alt="Amigo Secreto" />

			<h1 className="text-3xl font-bold text-center mb-2">{terms.title}</h1>
			<h1 className="text-xl font-medium text-center mb-8">{terms.subTitle}</h1>
			<div className="space-y-6 max-w-2xl mx-auto">
				{terms.sections.map((section, index) => (
					<div key={index} className="space-y-2">
						<h2 className="text-xl font-semibold text-green-900">{section.title}</h2>
						<p className="text-gray-600">{section.content}</p>
					</div>
				))}
			</div>
			<div className="mt-10 text-center">
				<Link href={"/"} className="px-6 py-2 text-white bg-green-900 hover:bg-gree-950 rounded-md">
					Voltar ao Início
				</Link>
			</div>
		</div>
	);
};
