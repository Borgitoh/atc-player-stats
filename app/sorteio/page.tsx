import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'

export const metadata = {
  title: 'Sorteio - FC26',
  description: 'Informações sobre o sorteio automático de jogos da FC26',
}

export default function SorteioPage() {
  return (
    <main className="min-h-screen bg-[#0a0e27]">
      {/* Background decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1e40af]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4c1d95]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center gap-3">
            <Zap className="w-12 h-12 text-[#fbbf24]" />
            Sorteio Automático
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl">
            Como funciona a distribuição dos jogos da FC26
          </p>
        </div>

        {/* Sistema de Sorteio */}
        <div className="space-y-6 mb-12">
          <div className="bg-[#1a1f3a] border border-[#2d3748] rounded-lg p-6 hover:border-[#1e40af] transition-colors">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#fbbf24] mt-1" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Embaralhamento Aleatório
                </h2>
                <p className="text-[#94a3b8]">
                  Utilizamos o algoritmo Fisher-Yates para garantir uma distribuição completamente aleatória dos jogos, eliminando qualquer viés ou previsibilidade.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1f3a] border border-[#2d3748] rounded-lg p-6 hover:border-[#ec4899] transition-colors">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#fbbf24] mt-1" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Distribuição Equitativa
                </h2>
                <p className="text-[#94a3b8]">
                  Os jogos são distribuídos uniformemente entre os dias disponíveis (21, 22 e 23 de Fevereiro) para garantir que nenhuma divisão ou time seja prejudicado.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1f3a] border border-[#2d3748] rounded-lg p-6 hover:border-[#06b6d4] transition-colors">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-[#fbbf24] mt-1" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Cronograma Justo
                </h2>
                <p className="text-[#94a3b8]">
                  Cada divisão tem seus jogos distribuídos em diferentes horários para evitar conflitos de escalação e garantir a melhor experiência para todos os participantes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1825] border border-[#2d3748] rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">1ª Divisão</h3>
            <ul className="space-y-2 text-[#94a3b8]">
              <li className="flex items-center gap-2">
                <span className="text-[#fbbf24]">•</span>
                5 Jogadores
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fbbf24]">•</span>
                5 Partidas Sorteadas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fbbf24]">•</span>
                3 Dias de Competição
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1825] border border-[#2d3748] rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">2ª Divisão</h3>
            <ul className="space-y-2 text-[#94a3b8]">
              <li className="flex items-center gap-2">
                <span className="text-[#fbbf24]">•</span>
                6 Jogadores
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fbbf24]">•</span>
                10 Partidas Sorteadas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fbbf24]">•</span>
                3 Dias de Competição
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#94a3b8] mb-6">
            Pronto para ver o cronograma completo?
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#1e40af] to-[#4c1d95] hover:from-[#1e3a8a] hover:to-[#3f0f70] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#1e40af]/30"
          >
            Ver Agenda de Jogos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-[#1a1f3a] border border-[#2d3748] rounded-lg text-center">
          <p className="text-[#94a3b8] text-sm">
            O sorteio foi realizado de forma automática e transparente, garantindo a imparcialidade
            na distribuição de todas as partidas. Qualquer dúvida sobre o processo, entre em contato
            com a administração.
          </p>
        </div>
      </div>
    </main>
  )
}
