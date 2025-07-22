import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";

const policy = {
  title: "Política de Privacidade",
  subTitle: "Saiba como coletamos, usamos e protegemos seus dados no Olho no Nível.",
  sections: [
    {
      title: "1. Introdução",
      content: "Esta Política de Privacidade descreve como o Olho no Nível coleta, utiliza, armazena e protege as informações pessoais dos usuários. Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política."
    },
    {
      title: "2. Dados Coletados",
      content: "Coletamos informações fornecidas por você no cadastro, como nome, e-mail, telefone e endereço, além de dados de uso do sistema, como registros de acesso, dispositivos monitorados, níveis de água, status das bombas e preferências de notificação."
    },
    {
      title: "3. Uso das Informações",
      content: "Utilizamos seus dados para: (a) fornecer e melhorar nossos serviços; (b) enviar notificações e alertas; (c) personalizar sua experiência; (d) garantir a segurança do sistema; (e) cumprir obrigações legais."
    },
    {
      title: "4. Compartilhamento de Dados",
      content: "Não vendemos ou compartilhamos suas informações pessoais com terceiros, exceto: (a) quando necessário para prestação do serviço (ex: provedores de notificações); (b) para cumprimento de obrigações legais; (c) com seu consentimento expresso."
    },
    {
      title: "5. Segurança",
      content: "Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema é totalmente seguro. Recomendamos que você mantenha sua senha em sigilo."
    },
    {
      title: "6. Cookies e Tecnologias de Rastreamento",
      content: "Utilizamos cookies e tecnologias similares para melhorar a navegação, analisar o uso do sistema e personalizar conteúdos. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador."
    },
    {
      title: "7. Retenção e Exclusão de Dados",
      content: "Seus dados são mantidos enquanto sua conta estiver ativa ou conforme necessário para cumprir obrigações legais. Você pode solicitar a exclusão de sua conta e dados a qualquer momento, exceto quando a retenção for exigida por lei."
    },
    {
      title: "8. Direitos do Usuário",
      content: "Você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco pelos canais informados abaixo."
    },
    {
      title: "9. Alterações nesta Política",
      content: "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas por meio do sistema ou por e-mail. O uso continuado do serviço após as alterações constitui aceitação da nova política."
    },
    {
      title: "10. Contato",
      content: "Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados, entre em contato pelo e-mail: suporte@olhononivel.com.br ou WhatsApp: (62) 9 9808-4683."
    }
  ]
};

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{policy.title}</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">{policy.subTitle}</p>
        </div>

        {/* Conteúdo da política */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {policy.sections.map((section, index) => (
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
              Esta política foi atualizada em {new Date().toLocaleDateString('pt-BR')}
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