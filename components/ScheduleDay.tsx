'use client'

import { Calendar } from 'lucide-react'
import { MatchCard } from './MatchCard'

interface Match {
  id: number
  time: string
  division: string
  home: string
  away: string
  status: 'scheduled' | 'live' | 'finished'
  homeScore?: number
  awayScore?: number
}

interface ScheduleDayProps {
  date: string
  dayOfWeek: string
  matches: Match[]
}

export function ScheduleDay({ date, dayOfWeek, matches }: ScheduleDayProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-gradient-to-r from-[#1e40af] to-[#4c1d95] px-4 py-2 rounded-lg border border-[#2d3748]">
          <Calendar className="w-5 h-5 text-[#fbbf24]" />
          <div>
            <p className="text-white font-bold text-lg">{date}</p>
            <p className="text-[#94a3b8] text-xs uppercase tracking-wider">
              {dayOfWeek}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>
    </div>
  )
}
