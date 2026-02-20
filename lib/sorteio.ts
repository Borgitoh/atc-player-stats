/**
 * Função para embaralhar um array usando algoritmo Fisher-Yates
 */
export function embaralhar<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 * Gera sorteio de partidas para uma divisão
 * Cada jogador joga contra todos os outros (duas vezes)
 */
export function gerarSorteio(jogadores: string[]): Array<{
  casa: string
  visitante: string
}> {
  const partidas: Array<{ casa: string; visitante: string }> = []

  // Gerar todas as combinações possíveis
  for (let i = 0; i < jogadores.length; i++) {
    for (let j = 0; j < jogadores.length; j++) {
      if (i !== j) {
        partidas.push({
          casa: jogadores[i],
          visitante: jogadores[j],
        })
      }
    }
  }

  // Embaralhar as partidas
  return embaralhar(partidas)
}

/**
 * Distribui partidas em dias específicos
 */
export function distribuirPartidas(
  partidas: Array<{ casa: string; visitante: string }>,
  numDias: number
): Record<string, Array<{ casa: string; visitante: string }>> {
  const distribuicao: Record<string, Array<{ casa: string; visitante: string }>> =
    {}

  for (let i = 0; i < numDias; i++) {
    distribuicao[i] = []
  }

  partidas.forEach((partida, index) => {
    const dia = index % numDias
    distribuicao[dia].push(partida)
  })

  return distribuicao
}
