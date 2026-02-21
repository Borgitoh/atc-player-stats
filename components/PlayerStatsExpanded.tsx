'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface PlayerStatsExpandedProps {
  name: string
  stats: {
    partidas: number
    vitórias: number
    empates: number
    derrotas: number
    golsMarcados: number
    golsSofridos: number
    saldoGols: number
  }
  divisionColor: string
}

export function PlayerStatsExpanded({ name, stats, divisionColor }: PlayerStatsExpandedProps) {
  const data = [
    {
      category: 'Resultados',
      Vitórias: stats.vitórias,
      Empates: stats.empates,
      Derrotas: stats.derrotas,
    },
  ]

  const goalsData = [
    {
      category: 'Gols',
      Marcados: stats.golsMarcados,
      Sofridos: stats.golsSofridos,
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Resultados Chart */}
      <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1825] border border-[#2d3748] rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Distribuição de Resultados</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
            <XAxis dataKey="category" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1f3a',
                border: `2px solid ${divisionColor}`,
                borderRadius: '8px',
                color: '#ffffff',
              }}
            />
            <Legend wrapperStyle={{ color: '#94a3b8' }} />
            <Bar dataKey="Vitórias" fill="#10b981" />
            <Bar dataKey="Empates" fill="#fbbf24" />
            <Bar dataKey="Derrotas" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Goals Chart */}
      <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1825] border border-[#2d3748] rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Gols</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={goalsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
            <XAxis dataKey="category" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1f3a',
                border: `2px solid ${divisionColor}`,
                borderRadius: '8px',
                color: '#ffffff',
              }}
            />
            <Legend wrapperStyle={{ color: '#94a3b8' }} />
            <Bar dataKey="Marcados" fill="#ec4899" />
            <Bar dataKey="Sofridos" fill="#06b6d4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
