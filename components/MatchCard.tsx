'use client'

import { Trophy } from 'lucide-react'

interface MatchCardProps {
  id: number
  time: string
  division: string
  home: string
  away: string
  status: 'scheduled' | 'live' | 'finished'
  homeScore?: number
  awayScore?: number
}

export function MatchCard({
  time,
  division,
  home,
  away,
  status,
  homeScore,
  awayScore,
}: MatchCardProps) {
  const isDivision1 = division === '1 DIVISÃO'
  const divisionColor = isDivision1
    ? 'border-l-4 border-l-[#ec4899]'
    : 'border-l-4 border-l-[#06b6d4]'

  return (
    <div
      className={`${divisionColor} rounded-lg bg-gradient-to-r from-[#1a1f3a] to-[#0f1825] p-4 backdrop-blur-sm border border-[#2d3748] shadow-lg hover:shadow-xl hover:shadow-[#00d9ff]/20 transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-xs font-semibold text-[#fbbf24] uppercase tracking-wider">
              {division}
            </span>
          </div>
          <div className="text-sm text-[#94a3b8] mb-3">{time}</div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="font-bold text-white text-sm md:text-base truncate">
                {home}
              </p>
              {status === 'finished' && (
                <p className="text-[#06b6d4] font-semibold text-lg mt-1">
                  {homeScore}
                </p>
              )}
            </div>

            <div className="flex flex-col items-center gap-1">
              {status === 'scheduled' && (
                <div className="text-center">
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#1e40af] text-white rounded">
                    vs
                  </span>
                </div>
              )}
              {status === 'live' && (
                <div className="flex items-center gap-1">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-semibold text-red-400">LIVE</span>
                </div>
              )}
              {status === 'finished' && (
                <p className="text-[#94a3b8] text-xs font-semibold">Final</p>
              )}
            </div>

            <div className="flex-1 text-right">
              <p className="font-bold text-white text-sm md:text-base truncate">
                {away}
              </p>
              {status === 'finished' && (
                <p className="text-[#06b6d4] font-semibold text-lg mt-1">
                  {awayScore}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
