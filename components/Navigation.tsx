'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Trophy, Calendar } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0e27]/80 border-b border-[#2d3748]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1e40af] to-[#4c1d95] rounded-lg flex items-center justify-center">
            <Trophy className="w-6 h-6 text-[#fbbf24]" />
          </div>
          <span className="font-bold text-white text-lg hidden sm:inline">FC26</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            href="/"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              pathname === '/'
                ? 'bg-[#1e40af] text-white shadow-lg shadow-[#1e40af]/20'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold hidden sm:inline">Classificação</span>
          </Link>

          <Link
            href="/schedule"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              pathname === '/schedule'
                ? 'bg-[#1e40af] text-white shadow-lg shadow-[#1e40af]/20'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold hidden sm:inline">Agenda</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
