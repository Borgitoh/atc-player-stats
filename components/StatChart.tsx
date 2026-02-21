'use client'

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'

interface StatChartProps {
  wins: number
  draws: number
  losses: number
  divisionColor: string
}

export function StatChart({ wins, draws, losses, divisionColor }: StatChartProps) {
  const data = [
    { name: 'Vitórias', value: wins },
    { name: 'Empates', value: draws },
    { name: 'Derrotas', value: losses },
  ]

  const COLORS = [divisionColor === '#ec4899' ? '#10b981' : '#06b6d4', '#fbbf24', '#ef4444']

  const total = wins + draws + losses

  return (
    <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1825] border border-[#2d3748] rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-6">Distribuição de Resultados</h3>

      {total === 0 ? (
        <div className="flex items-center justify-center h-64 text-[#94a3b8]">
          <p>Sem partidas ainda</p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1f3a',
                border: `1px solid ${divisionColor}`,
                borderRadius: '8px',
                color: '#ffffff',
              }}
            />
            <Legend wrapperStyle={{ color: '#94a3b8' }} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
