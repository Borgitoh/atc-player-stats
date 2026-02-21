'use client'

import { Trophy, Target, Clock, Award } from 'lucide-react'

interface PlayerStatsProps {
  played: number
  wins: number
  draws: number
  losses: number
  goalsFor: number
  goalsAgainst: number
  points: number
  divisionColor: string
}

export function PlayerStats({
  played,
  wins,
  draws,
  losses,
  goalsFor,
  goalsAgainst,
  points,
  divisionColor,
}: PlayerStatsProps) {
  const stats = [
    {
      label: 'Partidas',
      value: played,
      icon: Trophy,
      color: '#3b82f6',
    },
    {
      label: 'Vitórias',
      value: wins,
      icon: Award,
      color: '#10b981',
    },
    {
      label: 'Empates',
      value: draws,
      icon: Clock,
      color: '#fbbf24',
    },
    {
      label: 'Derrotas',
      value: losses,
      icon: Target,
      color: '#ef4444',
    },
    {
      label: 'Gols Marcados',
      value: goalsFor,
      icon: Target,
      color: '#ec4899',
    },
    {
      label: 'Gols Sofridos',
      value: goalsAgainst,
      icon: Target,
      color: '#06b6d4',
    },
    {
      label: 'Pontos',
      value: points,
      icon: Trophy,
      color: divisionColor,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1825] border border-[#2d3748] rounded-lg p-4 hover:border-[#1e40af] transition-all hover:shadow-lg hover:shadow-[#1e40af]/20"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-[#94a3b8]">{stat.label}</p>
              <Icon className="w-5 h-5" style={{ color: stat.color }} />
            </div>
            <p className="text-3xl font-bold" style={{ color: stat.color }}>
              {stat.value}
            </p>
          </div>
        )
      })}
    </div>
  )
}
