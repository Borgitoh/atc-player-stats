'use client'

import { useState } from 'react'

interface DivisionFilterProps {
  onFilterChange: (filter: 'all' | '1' | '2') => void
}

export function DivisionFilter({ onFilterChange }: DivisionFilterProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | '1' | '2'>('all')

  const handleFilter = (filter: 'all' | '1' | '2') => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <div className="flex gap-3 mb-8 justify-center md:justify-start">
      <button
        onClick={() => handleFilter('all')}
        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
          activeFilter === 'all'
            ? 'bg-[#1e40af] text-white shadow-lg shadow-[#1e40af]/30'
            : 'bg-[#1a1f3a] text-[#94a3b8] border border-[#2d3748] hover:border-[#1e40af]'
        }`}
      >
        Todos os Jogos
      </button>
      <button
        onClick={() => handleFilter('1')}
        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
          activeFilter === '1'
            ? 'bg-[#ec4899] text-white shadow-lg shadow-[#ec4899]/30'
            : 'bg-[#1a1f3a] text-[#94a3b8] border border-[#2d3748] hover:border-[#ec4899]'
        }`}
      >
        1ª Divisão
      </button>
      <button
        onClick={() => handleFilter('2')}
        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
          activeFilter === '2'
            ? 'bg-[#06b6d4] text-white shadow-lg shadow-[#06b6d4]/30'
            : 'bg-[#1a1f3a] text-[#94a3b8] border border-[#2d3748] hover:border-[#06b6d4]'
        }`}
      >
        2ª Divisão
      </button>
    </div>
  )
}
