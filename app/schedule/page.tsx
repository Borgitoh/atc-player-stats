import { SorteoInfo } from '@/components/SorteoInfo'
import { ScheduleWrapper } from '@/components/ScheduleWrapper'
import matchesData from '@/data/matches.json'

export const metadata = {
  title: 'Agenda de Jogos - FC26',
  description: 'Agenda de jogos da FC26 para os dias 21, 22 e 23 de Fevereiro',
}

export default function SchedulePage() {
  const schedule = matchesData.schedule

  return (
    <main className="min-h-screen bg-[#0a0e27]">
      {/* Background decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1e40af]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4c1d95]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
            Agenda de Jogos
          </h1>
          <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto">
            Confira os jogos sorteados para as duas divisões nos dias 21, 22 e 23 de Fevereiro
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="bg-[#1a1f3a] border border-[#2d3748] rounded-lg p-4">
              <p className="text-[#fbbf24] font-bold text-2xl">15</p>
              <p className="text-[#94a3b8] text-sm mt-1">Jogos Total</p>
            </div>
            <div className="bg-[#1a1f3a] border border-[#2d3748] rounded-lg p-4">
              <p className="text-[#ec4899] font-bold text-2xl">2</p>
              <p className="text-[#94a3b8] text-sm mt-1">Divisões</p>
            </div>
            <div className="bg-[#1a1f3a] border border-[#2d3748] rounded-lg p-4">
              <p className="text-[#06b6d4] font-bold text-2xl">3</p>
              <p className="text-[#94a3b8] text-sm mt-1">Dias</p>
            </div>
          </div>
        </div>

        {/* Sorteo Info */}
        <SorteoInfo />

        {/* Schedule */}
        <ScheduleWrapper schedule={schedule} />

        {/* Footer Info */}
        <div className="mt-16 bg-gradient-to-r from-[#1a1f3a] to-[#0f1825] border border-[#2d3748] rounded-lg p-6 text-center">
          <p className="text-[#94a3b8] text-sm">
            Os resultados serão atualizados conforme os jogos forem disputados
          </p>
          <p className="text-[#fbbf24] font-semibold mt-2">
            Boa sorte a todos os participantes!
          </p>
        </div>
      </div>
    </main>
  )
}
