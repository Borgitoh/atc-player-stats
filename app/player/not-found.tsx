import Link from 'next/link'
import { Trophy } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-[#ec4899]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-[#06b6d4]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-6">
          <Trophy className="w-24 h-24 mx-auto text-[#1e40af] opacity-50" />
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-4">404</h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#fbbf24]">
          Jogador não encontrado
        </h2>

        <p className="text-[#94a3b8] text-lg mb-8 max-w-md mx-auto">
          O jogador que você procura não existe na base de dados do FC26. Verifique o ID e tente novamente.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#4c1d95] hover:from-[#1e3a8a] hover:to-[#3f0f70] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#1e40af]/30"
        >
          Voltar à Classificação
        </Link>
      </div>
    </div>
  )
}
