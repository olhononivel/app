import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.svg";

export default function AlertasInteligentes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src={logo} alt="Olho no Nível" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                Olho no Nível
              </span>
            </Link>
            <Link
              href="/#benefits"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Voltar aos Benefícios
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-rose-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-100 text-red-800 font-semibold mb-8">
              <span className="text-2xl mr-3">🔔</span>
              Notificações Inteligentes
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                Alertas Inteligentes
              </span>
              <br />
              <span className="text-gray-900">que salvam o dia</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Notificações personalizadas por SMS, email ou push notification no app para nunca mais ficar sem água
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">4</div>
                <div className="text-gray-600">Canais</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Ativos</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Personalizados</div>
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
              Como funcionam os alertas inteligentes?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Detecção Inteligente</h3>
                  <p className="text-gray-600">Algoritmos avançados detectam padrões anormais e enviam alertas preventivos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Múltiplos Canais</h3>
                  <p className="text-gray-600">Receba notificações por email, SMS, WhatsApp e push notifications no app.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalização Total</h3>
                  <p className="text-gray-600">Configure níveis de alerta, horários e canais de preferência.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔔</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tipos de Alertas</h3>
                <p className="text-gray-600">Notificações para cada situação</p>
              </div>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚨</span>
                    <div>
                      <div className="font-semibold text-red-700">Crítico</div>
                      <div className="text-sm text-red-600">Nível muito baixo</div>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <div className="font-semibold text-orange-700">Atenção</div>
                      <div className="text-sm text-orange-600">Nível baixo</div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💧</span>
                    <div>
                      <div className="font-semibold text-blue-700">Vazamento</div>
                      <div className="text-sm text-blue-600">Consumo anormal</div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-semibold text-green-700">Normal</div>
                      <div className="text-sm text-green-600">Tudo funcionando</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tempo Real</h3>
            <p className="text-gray-600">Alertas enviados instantaneamente quando detectadas situações críticas.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🎛️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Configurável</h3>
            <p className="text-gray-600">Personalize horários, níveis e canais de notificação conforme sua preferência.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confiável</h3>
            <p className="text-gray-600">Sistema redundante garante que você sempre receba as notificações importantes.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para receber alertas inteligentes?</h2>
          <p className="text-xl mb-8 opacity-90">Junte-se a milhares de usuários que nunca mais ficaram sem água</p>
          <Link
            href="/auth/register"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors"
          >
            Configurar Alertas
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 