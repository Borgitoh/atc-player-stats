'use client'

import Link from 'next/link'
import { Zap, Users, BarChart3, ArrowRight } from 'lucide-react'

export function SorteoInfo() {
  return (
    <div className="bg-gradient-to-r from-[#1a1f3a] via-[#0f1825] to-[#1a1f3a] border border-[#2d3748] rounded-lg p-6 md:p-8 mb-8 hover:border-[#1e40af] transition-colors">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="w-8 h-8 text-[#fbbf24]" />
            Sorteio Automático
          </h2>
          <p className="text-[#94a3b8] text-sm md:text-base">
            Todos os jogos foram sorteados aleatoriamente para garantir equidade nas competições
          </p>
        </div>

        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#ec4899]">11</div>
            <div className="text-xs text-[#94a3b8] mt-1 whitespace-nowrap">Jogadores</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#06b6d4]">15</div>
            <div className="text-xs text-[#94a3b8] mt-1 whitespace-nowrap">Partidas</div>
          </div>
        </div>
      </div>

      {/* Divisões Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#2d3748]">
        <div className="flex items-start gap-3">
          <Users className="w-5 h-5 text-[#ec4899] mt-1 flex-shrink-0" />
          <div>
            <p className="font-semibold text-white">1ª Divisão</p>
            <p className="text-sm text-[#94a3b8]">5 jogadores - 5 partidas</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <BarChart3 className="w-5 h-5 text-[#06b6d4] mt-1 flex-shrink-0" />
          <div>
            <p className="font-semibold text-white">2ª Divisão</p>
            <p className="text-sm text-[#94a3b8]">6 jogadores - 10 partidas</p>
          </div>
        </div>
      </div>

      {/* Learn More Link */}
      <div className="mt-6 pt-6 border-t border-[#2d3748]">
        <Link
          href="/sorteio"
          className="inline-flex items-center gap-2 text-[#1e40af] hover:text-[#1e3a8a] font-semibold transition-colors"
        >
          Saiba mais sobre o sorteio
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
