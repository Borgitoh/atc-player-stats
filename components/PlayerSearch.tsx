'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import playersData from '@/data/players.json'

interface SearchResult {
  id: string
  name: string
  division: string
  divisionNumber: number
  color: string
}

export function PlayerSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      setIsOpen(false)
      return
    }

    const allPlayers: SearchResult[] = []

    playersData.divisions.forEach((division) => {
      division.players.forEach((player) => {
        if (
          player.name.toLowerCase().includes(query.toLowerCase()) ||
          query.toLowerCase().includes(player.name.toLowerCase())
        ) {
          allPlayers.push({
            id: player.id,
            name: player.name,
            division: division.name,
            divisionNumber: division.id,
            color: division.color,
          })
        }
      })
    })

    setResults(allPlayers)
    setIsOpen(true)
  }, [query])

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
        <input
          type="text"
          placeholder="Buscar jogador..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2 bg-[#1a1f3a] border border-[#2d3748] rounded-lg text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#1e40af] transition-colors"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1f3a] border border-[#2d3748] rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((player) => (
            <Link
              key={player.id}
              href={`/player/${player.id}`}
              onClick={() => {
                setQuery('')
                setResults([])
                setIsOpen(false)
              }}
              className="flex items-center justify-between px-4 py-3 hover:bg-[#0f1825] border-b border-[#2d3748] last:border-b-0 transition-colors"
            >
              <div>
                <p className="text-white font-medium">{player.name}</p>
                <p className="text-xs text-[#94a3b8]">{player.division}</p>
              </div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: player.color }}
              />
            </Link>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1f3a] border border-[#2d3748] rounded-lg px-4 py-3 text-[#94a3b8] text-sm">
          Nenhum jogador encontrado
        </div>
      )}
    </div>
  )
}
