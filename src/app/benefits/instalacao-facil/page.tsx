import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.svg";

export default function InstalacaoFacil() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src={logo} alt="Olho no Nível" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Olho no Nível
              </span>
            </Link>
            <Link
              href="/#benefits"
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Voltar aos Benefícios
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-100 text-yellow-800 font-semibold mb-8">
              <span className="text-2xl mr-3">⚡</span>
              Instalação Rápida
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Instalação Fácil
              </span>
              <br />
              <span className="text-gray-900">em 5 minutos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Sem necessidade de técnico especializado. Instale você mesmo em poucos minutos com nosso guia passo a passo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">5min</div>
                <div className="text-gray-600">Instalação</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">0</div>
                <div className="text-gray-600">Ferramentas</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Simples</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Como é simples instalar?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📦</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kit Completo</h3>
                  <p className="text-gray-600">Receba tudo que precisa: sensor, suporte, manual ilustrado e até as baterias.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔧</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sem Furos</h3>
                  <p className="text-gray-600">Instalação na tampa da caixa d&apos;água sem necessidade de furos ou modificações.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Configuração Automática</h3>
                  <p className="text-gray-600">Após a instalação, o dispositivo se conecta automaticamente e começa a funcionar.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Passo a Passo</h3>
                <p className="text-gray-600">Instalação em 4 etapas simples</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <span className="text-gray-700">Abra a caixa d&apos;água</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <span className="text-gray-700">Fixe o sensor na tampa</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <span className="text-gray-700">Feche a caixa d&apos;água</span>
                </div>
                <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 border-2 border-green-200">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <span className="text-green-700 font-semibold">Pronto! Funcionando</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">📖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Manual Ilustrado</h3>
            <p className="text-gray-600">Guia passo a passo com imagens detalhadas para facilitar a instalação.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🎥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vídeo Tutorial</h3>
            <p className="text-gray-600">Vídeo explicativo completo disponível no aplicativo e YouTube.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🛠️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Suporte Técnico</h3>
            <p className="text-gray-600">Equipe especializada disponível para ajudar em caso de dúvidas.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para instalar?</h2>
          <p className="text-xl mb-8 opacity-90">Junte-se a milhares de clientes que instalaram sozinhos em poucos minutos</p>
          <Link
            href="/auth/register"
            className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors"
          >
            Instalar Agora
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 