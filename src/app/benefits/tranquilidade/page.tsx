import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.svg";

export default function Tranquilidade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src={logo} alt="Olho no Nível" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Olho no Nível
              </span>
            </Link>
            <Link
              href="/#benefits"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Voltar aos Benefícios
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800 font-semibold mb-8">
              <span className="text-2xl mr-3">🛡️</span>
              Proteção Completa
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Tranquilidade Total
              </span>
              <br />
              <span className="text-gray-900">24 horas por dia</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Nunca mais se preocupe em ficar sem água. Receba alertas inteligentes antes que isso aconteça
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Monitoramento</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">5min</div>
                <div className="text-gray-600">Antecedência</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Proteção</div>
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
              Como garantimos sua tranquilidade?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔔</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Alertas Preventivos</h3>
                  <p className="text-gray-600">Receba notificações quando o nível estiver baixo, muito antes de acabar a água.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Múltiplos Canais</h3>
                  <p className="text-gray-600">Alertas por email, SMS, WhatsApp e push notifications no aplicativo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tempo Real</h3>
                  <p className="text-gray-600">Monitoramento contínuo com atualizações a cada 5 minutos.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sistema de Proteção</h3>
                <p className="text-gray-600">Níveis de alerta personalizáveis</p>
              </div>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                  <div className="flex justify-between items-center">
                    <span className="text-red-700 font-semibold">Crítico</span>
                    <span className="font-bold text-red-900">0-25%</span>
                  </div>
                  <p className="text-sm text-red-600 mt-1">Alerta imediato</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-700 font-semibold">Baixo</span>
                    <span className="font-bold text-orange-900">26-50%</span>
                  </div>
                  <p className="text-sm text-orange-600 mt-1">Atenção</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-semibold">Seguro</span>
                    <span className="font-bold text-green-900">51-100%</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Tranquilo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Precisão Garantida</h3>
            <p className="text-gray-600">Sensores com precisão de 99% para medições confiáveis e alertas precisos.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🔋</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bateria de Longa Duração</h3>
            <p className="text-gray-600">Bateria que dura até 5 anos, garantindo monitoramento contínuo sem interrupções.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Conectividade LoRa</h3>
            <p className="text-gray-600">Tecnologia LoRa com alcance de até 15km, funcionando mesmo em áreas remotas.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para ter tranquilidade?</h2>
          <p className="text-xl mb-8 opacity-90">Junte-se a milhares de famílias que já conquistaram a paz de espírito com o monitoramento inteligente</p>
          <Link
            href="/auth/register"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors"
          >
            Conquistar Tranquilidade
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 