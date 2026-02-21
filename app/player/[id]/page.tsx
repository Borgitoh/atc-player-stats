import { PlayerProfile } from '@/components/PlayerProfile'
import playersData from '@/data/players.json'

interface PlayerPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PlayerPageProps) {
  const { id } = await params
  
  // Find player in all divisions
  let playerFound = null
  let divisionInfo = null

  for (const division of playersData.divisions) {
    const player = division.players.find((p) => p.id === id)
    if (player) {
      playerFound = player
      divisionInfo = division
      break
    }
  }

  if (!playerFound) {
    return {
      title: 'Jogador não encontrado - FC26',
      description: 'O jogador solicitado não foi encontrado na base de dados do FC26',
    }
  }

  return {
    title: `${playerFound.name} - FC26`,
    description: `Perfil profissional de ${playerFound.name} - ${playerFound.bio}`,
  }
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { id } = await params

  // Find player in all divisions
  let playerFound = null
  let divisionInfo = null

  for (const division of playersData.divisions) {
    const player = division.players.find((p) => p.id === id)
    if (player) {
      playerFound = player
      divisionInfo = division
      break
    }
  }

  // If player not found, show 404
  if (!playerFound || !divisionInfo) {
    return (
      <div className="min-h-screen bg-[#0a0e27] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Jogador não encontrado</h1>
          <p className="text-[#94a3b8] mb-8">O jogador que você procura não existe na base de dados do FC26</p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-[#1e40af] hover:bg-[#1e3a8a] rounded-lg font-semibold transition-colors"
          >
            Voltar à Página Inicial
          </a>
        </div>
      </div>
    )
  }

  return (
    <PlayerProfile
      id={playerFound.id}
      name={playerFound.name}
      division={playerFound.division}
      divisionName={divisionInfo.name}
      divisionColor={divisionInfo.color}
      bio={playerFound.bio}
      played={playerFound.played}
      wins={playerFound.wins}
      draws={playerFound.draws}
      losses={playerFound.losses}
      goalsFor={playerFound.goalsFor}
      goalsAgainst={playerFound.goalsAgainst}
      points={playerFound.points}
      bestMatches={playerFound.bestMatches}
    />
  )
}
