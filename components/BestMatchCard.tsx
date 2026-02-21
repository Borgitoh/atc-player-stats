'use client'

import { Calendar, Target, Zap } from 'lucide-react'

interface BestMatchCardProps {
  date: string
  opponent: string
  result: string
  description: string
  highlights: string[]
  divisionColor: string
}

export function BestMatchCard({
  date,
  opponent,
  result,
  description,
  highlights,
  divisionColor,
}: BestMatchCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })

  return (
    <div
      className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1825] border-l-4 rounded-lg p-6 hover:shadow-lg transition-all hover:shadow-[#1e40af]/30"
      style={{ borderLeftColor: divisionColor }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-white mb-2">vs {opponent}</h4>
          <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
        </div>
        <div
          className="text-3xl font-bold px-4 py-2 rounded-lg"
          style={{ color: divisionColor }}
        >
          {result}
        </div>
      </div>

      {/* Description */}
      <p className="text-[#cbd5e1] mb-4">{description}</p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2">
        {highlights.map((highlight, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: `${divisionColor}20`,
              color: divisionColor,
            }}
          >
            <Zap className="w-3 h-3" />
            {highlight}
          </span>
        ))}
      </div>
    </div>
  )
}
