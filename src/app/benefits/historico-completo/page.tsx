import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo.svg";

export default function HistoricoCompleto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src={logo} alt="Olho no Nível" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Olho no Nível
              </span>
            </Link>
            <Link
              href="/#benefits"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Voltar aos Benefícios
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-100 text-indigo-800 font-semibold mb-8">
              <span className="text-2xl mr-3">📊</span>
              Análise Completa
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Histórico Completo
              </span>
              <br />
              <span className="text-gray-900">de dados ilimitados</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Acesse relatórios detalhados do consumo e identifique padrões de uso para otimizar sua gestão de água
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-2">∞</div>
                <div className="text-gray-600">Dados</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">5min</div>
                <div className="text-gray-600">Intervalo</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Precisão</div>
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
              Como o histórico ajuda na gestão?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tendências de Consumo</h3>
                  <p className="text-gray-600">Identifique padrões de uso e sazonalidade para otimizar o consumo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Detecção de Anomalias</h3>
                  <p className="text-gray-600">Relatórios detalhados ajudam a identificar vazamentos e desperdícios.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Economia Inteligente</h3>
                  <p className="text-gray-600">Baseado no histórico, receba dicas personalizadas para economizar água.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Relatórios Disponíveis</h3>
                <p className="text-gray-600">Análises detalhadas do seu consumo</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-indigo-50 rounded-xl p-4">
                  <span className="text-2xl">📅</span>
                  <span className="text-gray-700">Relatório diário</span>
                </div>
                <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4">
                  <span className="text-2xl">📊</span>
                  <span className="text-gray-700">Relatório semanal</span>
                </div>
                <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-700">Relatório mensal</span>
                </div>
                <div className="flex items-center gap-4 bg-purple-50 rounded-xl p-4">
                  <span className="text-2xl">📋</span>
                  <span className="text-gray-700">Relatório anual</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Gráficos Interativos</h3>
            <p className="text-gray-600">Visualize seus dados com gráficos dinâmicos e interativos para melhor compreensão.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">📤</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Exportação de Dados</h3>
            <p className="text-gray-600">Exporte relatórios em PDF, Excel ou CSV para análise externa ou backup.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">IA Preditiva</h3>
            <p className="text-gray-600">Algoritmos de IA analisam padrões e preveem futuros consumos e problemas.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para analisar seus dados?</h2>
          <p className="text-xl mb-8 opacity-90">Junte-se a milhares de usuários que já otimizaram seu consumo com dados inteligentes</p>
          <Link
            href="/auth/register"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors"
          >
            Começar a Analisar
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 