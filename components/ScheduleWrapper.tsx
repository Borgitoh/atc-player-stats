'use client'

import { useState } from 'react'
import { ScheduleDay } from './ScheduleDay'
import { DivisionFilter } from './DivisionFilter'

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

interface ScheduleData {
  [key: string]: {
    date: string
    dayOfWeek: string
    matches: Match[]
  }
}

interface ScheduleWrapperProps {
  schedule: ScheduleData
}

export function ScheduleWrapper({ schedule }: ScheduleWrapperProps) {
  const [filter, setFilter] = useState<'all' | '1' | '2'>('all')

  const filterMatches = (matches: Match[]) => {
    if (filter === 'all') return matches
    return matches.filter((match) =>
      match.division.includes(`${filter}`)
    )
  }

  return (
    <div>
      <DivisionFilter onFilterChange={setFilter} />

      <div className="space-y-8">
        {Object.entries(schedule).map(([_, dayData]) => {
          const filteredMatches = filterMatches(dayData.matches)
          
          if (filteredMatches.length === 0) {
            return null
          }

          return (
            <ScheduleDay
              key={dayData.date}
              date={dayData.date}
              dayOfWeek={dayData.dayOfWeek}
              matches={filteredMatches}
            />
          )
        })}
      </div>
    </div>
  )
}
