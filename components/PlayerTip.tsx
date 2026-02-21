'use client'

import { Lightbulb, X } from 'lucide-react'
import { useState } from 'react'

export function PlayerTip() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-[#1e40af]/20 to-[#4c1d95]/20 border border-[#1e40af] rounded-lg p-4 md:p-6 mb-8 flex gap-4">
      <div className="flex-shrink-0">
        <Lightbulb className="w-6 h-6 text-[#fbbf24]" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-white mb-1">Dica: Clique em qualquer jogador</h3>
        <p className="text-sm text-[#cbd5e1]">
          Clique em qualquer linha da tabela para visualizar o perfil completo do jogador, incluindo suas estatísticas detalhadas e melhores lances.
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="flex-shrink-0 text-[#94a3b8] hover:text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  )
}
