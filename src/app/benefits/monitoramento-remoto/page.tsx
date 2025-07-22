import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.svg";

export default function MonitoramentoRemoto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src={logo} alt="Olho no Nível" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Olho no Nível
              </span>
            </Link>
            <Link
              href="/#benefits"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Voltar aos Benefícios
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100 text-purple-800 font-semibold mb-8">
              <span className="text-2xl mr-3">📱</span>
              Acesso Global
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Monitoramento Remoto
              </span>
              <br />
              <span className="text-gray-900">de qualquer lugar</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Acompanhe sua caixa d'água de qualquer lugar através do aplicativo móvel com dados em tempo real
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">🌍</div>
                <div className="text-gray-600">Qualquer lugar</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Disponível</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">5min</div>
                <div className="text-gray-600">Atualização</div>
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
              Como funciona o monitoramento remoto?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tecnologia LoRa</h3>
                  <p className="text-gray-600">Sensores conectados via LoRa transmitem dados para nossa central de monitoramento.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">☁️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nuvem Segura</h3>
                  <p className="text-gray-600">Dados processados e armazenados em servidores seguros na nuvem.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">App Móvel</h3>
                  <p className="text-gray-600">Acesse seus dados através do aplicativo disponível para iOS e Android.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Funcionalidades do App</h3>
                <p className="text-gray-600">Tudo na palma da sua mão</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-purple-50 rounded-xl p-4">
                  <span className="text-2xl">📊</span>
                  <span className="text-gray-700">Nível em tempo real</span>
                </div>
                <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-700">Histórico de consumo</span>
                </div>
                <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4">
                  <span className="text-2xl">🔔</span>
                  <span className="text-gray-700">Configurar alertas</span>
                </div>
                <div className="flex items-center gap-4 bg-orange-50 rounded-xl p-4">
                  <span className="text-2xl">📋</span>
                  <span className="text-gray-700">Relatórios detalhados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Conectividade Global</h3>
            <p className="text-gray-600">Acesse seus dados de qualquer lugar do mundo com conexão à internet.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Segurança Total</h3>
            <p className="text-gray-600">Dados criptografados e protegidos com as mais avançadas tecnologias de segurança.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sincronização Instantânea</h3>
            <p className="text-gray-600">Dados atualizados automaticamente em todos os seus dispositivos.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para monitorar remotamente?</h2>
          <p className="text-xl mb-8 opacity-90">Junte-se a milhares de usuários que já têm controle total da sua caixa d'água</p>
          <Link
            href="/auth/register"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors"
          >
            Começar a Monitorar
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 