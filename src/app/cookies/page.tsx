import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";

const cookies = {
  title: "Política de Cookies",
  subTitle: "Saiba como utilizamos cookies e tecnologias similares no Olho no Nível.",
  sections: [
    {
      title: "1. O que são Cookies",
      content: "Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou smartphone) quando você visita nosso site. Eles nos ajudam a melhorar sua experiência de navegação e a entender como você utiliza nossos serviços."
    },
    {
      title: "2. Tipos de Cookies que Utilizamos",
      content: "Utilizamos diferentes tipos de cookies: (a) Cookies essenciais - necessários para o funcionamento básico do site; (b) Cookies de análise - para entender como os usuários navegam pelo site; (c) Cookies de funcionalidade - para lembrar suas preferências; (d) Cookies de marketing - para personalizar conteúdo e anúncios."
    },
    {
      title: "3. Cookies Essenciais",
      content: "Estes cookies são necessários para o funcionamento do site e não podem ser desativados. Eles incluem cookies de autenticação, segurança e funcionalidades básicas como monitoramento de sessão e preferências de idioma."
    },
    {
      title: "4. Cookies de Análise",
      content: "Utilizamos cookies de análise para entender como os usuários interagem com nosso site. Isso nos ajuda a melhorar a funcionalidade e a experiência do usuário. Estes cookies coletam informações anônimas sobre o uso do site."
    },
    {
      title: "5. Cookies de Funcionalidade",
      content: "Estes cookies permitem que o site lembre escolhas que você fez (como seu nome de usuário, idioma ou região) e forneça recursos aprimorados e mais personalizados. Eles também podem ser usados para fornecer serviços que você solicitou."
    },
    {
      title: "6. Cookies de Marketing",
      content: "Estes cookies são usados para rastrear visitantes em sites. A intenção é exibir anúncios relevantes e atrativos para o usuário individual e, portanto, mais valiosos para editores e anunciantes terceiros."
    },
    {
      title: "7. Cookies de Terceiros",
      content: "Alguns cookies podem ser colocados por serviços de terceiros que aparecem em nossas páginas, como Google Analytics, Google Fonts e outros serviços de análise. Estes cookies são gerenciados pelos respectivos provedores de serviços."
    },
    {
      title: "8. Como Gerenciar Cookies",
      content: "Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e pode configurar a maioria dos navegadores para impedir que sejam colocados. No entanto, se você fizer isso, pode precisar ajustar manualmente algumas preferências sempre que visitar um site."
    },
    {
      title: "9. Configurações do Navegador",
      content: "Para gerenciar cookies, você pode alterar as configurações do seu navegador. Cada navegador tem configurações diferentes, mas geralmente você pode encontrar essas opções no menu 'Ferramentas' ou 'Preferências' do seu navegador."
    },
    {
      title: "10. Atualizações desta Política",
      content: "Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares. Recomendamos que você revise esta política regularmente."
    },
    {
      title: "11. Contato",
      content: "Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco pelo e-mail: suporte@olhononivel.com.br ou WhatsApp: (11) 99650-1729."
    }
  ]
};

export default function Cookies() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{cookies.title}</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">{cookies.subTitle}</p>
        </div>

        {/* Conteúdo da política */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          {cookies.sections.map((section, index) => (
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