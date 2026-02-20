'use client'

import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { MatchCard } from './MatchCard'
import matchesData from '@/data/matches.json'

export function UpcomingMatches() {
  // Pega os primeiros 3 jogos da agenda
  const schedule = matchesData.schedule
  const upcomingMatches: any[] = []

  Object.entries(schedule).forEach(([_, dayData]) => {
    dayData.matches.forEach((match) => {
      if (upcomingMatches.length < 3) {
        upcomingMatches.push(match)
      }
    })
  })

  return (
    <div className="max-w-6xl mx-auto mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <Calendar className="w-8 h-8 text-[#fbbf24]" />
            Próximos Jogos
          </h2>
          <p className="text-[#94a3b8] mt-2">Confira os primeiros jogos da agenda</p>
        </div>
        <Link
          href="/schedule"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-[#1e40af] hover:text-[#1e3a8a] font-semibold transition-colors"
        >
          Ver todos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {upcomingMatches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>

      <Link
        href="/schedule"
        className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold rounded-lg transition-colors w-full"
      >
        Ver Agenda Completa
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
