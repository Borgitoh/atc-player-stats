'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PlayerStats } from './PlayerStats'
import { StatChart } from './StatChart'
import { BestMatchCard } from './BestMatchCard'
import { Breadcrumb } from './Breadcrumb'
import { PlayerStatsExpanded } from './PlayerStatsExpanded'

interface BestMatch {
  id: string
  date: string
  opponent: string
  result: string
  description: string
  highlights: string[]
}

interface PlayerProfileProps {
  id: string
  name: string
  division: number
  divisionName: string
  divisionColor: string
  bio: string
  played: number
  wins: number
  draws: number
  losses: number
  goalsFor: number
  goalsAgainst: number
  points: number
  bestMatches: BestMatch[]
}

export function PlayerProfile({
  id,
  name,
  division,
  divisionName,
  divisionColor,
  bio,
  played,
  wins,
  draws,
  losses,
  goalsFor,
  goalsAgainst,
  points,
  bestMatches,
}: PlayerProfileProps) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: divisionColor }}
        />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-[#4c1d95]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'FC26', href: '/' },
            { label: divisionName, href: '/' },
            { label: name },
          ]}
        />

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg bg-[#1a1f3a] hover:bg-[#1e40af] text-white font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar à Classificação
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#1a1f3a] via-[#0f1825] to-[#1a1f3a] border border-[#2d3748] rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-6">
              {/* Avatar */}
              <div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-4xl font-bold text-white border-4"
                style={{
                  backgroundColor: `${divisionColor}20`,
                  borderColor: divisionColor,
                }}
              >
                {initials}
              </div>

              {/* Player Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: `${divisionColor}20`,
                      color: divisionColor,
                    }}
                  >
                    {divisionName}
                  </span>
                </div>
                <p className="text-[#cbd5e1] text-lg mb-4">{bio}</p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6">
                  <div>
                    <p className="text-sm text-[#94a3b8] mb-1">Partidas</p>
                    <p className="text-2xl font-bold" style={{ color: divisionColor }}>
                      {played}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8] mb-1">Pontos</p>
                    <p className="text-2xl font-bold" style={{ color: divisionColor }}>
                      {points}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#94a3b8] mb-1">Saldo de Gols</p>
                    <p className="text-2xl font-bold" style={{ color: divisionColor }}>
                      {goalsFor - goalsAgainst}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ranking Position */}
            <div className="border-t border-[#2d3748] pt-4 mt-4">
              <p className="text-sm text-[#94a3b8]">
                Classificação: <span className="text-white font-semibold">Ver na tabela geral</span>
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Estatísticas Completas</h2>
          <PlayerStats
            played={played}
            wins={wins}
            draws={draws}
            losses={losses}
            goalsFor={goalsFor}
            goalsAgainst={goalsAgainst}
            points={points}
            divisionColor={divisionColor}
          />
        </div>

        {/* Charts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Análise Detalhada</h2>
          {played > 0 ? (
            <div className="space-y-8">
              <StatChart wins={wins} draws={draws} losses={losses} divisionColor={divisionColor} />
              <PlayerStatsExpanded
                name={name}
                stats={{
                  partidas: played,
                  vitórias: wins,
                  empates: draws,
                  derrotas: losses,
                  golsMarcados: goalsFor,
                  golsSofridos: goalsAgainst,
                  saldoGols: goalsFor - goalsAgainst,
                }}
                divisionColor={divisionColor}
              />
            </div>
          ) : (
            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1825] border border-[#2d3748] rounded-lg p-8 text-center text-[#94a3b8]">
              <p>Dados de análise não disponíveis. Jogue sua primeira partida para ver as estatísticas!</p>
            </div>
          )}
        </div>

        {/* Best Matches */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Melhores Lances</h2>
          {bestMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestMatches.map((match) => (
                <BestMatchCard
                  key={match.id}
                  date={match.date}
                  opponent={match.opponent}
                  result={match.result}
                  description={match.description}
                  highlights={match.highlights}
                  divisionColor={divisionColor}
                />
              ))}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1825] border border-[#2d3748] rounded-lg p-8 text-center text-[#94a3b8]">
              <p>Nenhum lance disponível ainda</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
