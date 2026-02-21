# Estrutura de Dados - FC26 Players

## Visão Geral

O sistema de perfis de jogador utiliza uma estrutura JSON hierárquica para armazenar dados de forma organizada e eficiente.

```
FC26 League
├── Division 1 (1ª Divisão)
│   ├── Player 1: King Kuky
│   ├── Player 2: Rafa
│   ├── Player 3: Paridade
│   ├── Player 4: Astro
│   └── Player 5: Paulo
│
└── Division 2 (2ª Divisão)
    ├── Player 6: Fúria
    ├── Player 7: Júnior
    ├── Player 8: Herman
    ├── Player 9: Fidel
    ├── Player 10: Felisberto
    └── Player 11: Fábio
```

## Estrutura Completa JSON

### Raiz

```typescript
interface League {
  league: {
    name: string              // "FC26 - ATC"
    season: number            // 2024
  }
  divisions: Division[]       // Array de divisões
}
```

### Divisão

```typescript
interface Division {
  id: number                  // 1 ou 2
  name: string               // "1 DIVISÃO" ou "2 DIVISÃO"
  color: string              // "#ec4899" ou "#06b6d4"
  players: Player[]          // Array de jogadores
}
```

### Jogador

```typescript
interface Player {
  // Identificação
  id: string                 // Único: "player-1" até "player-11"
  position: number           // 1-11 (posição na tabela)
  name: string              // "King Kuky"
  division: number          // 1 ou 2
  
  // Estatísticas de Resultados
  played: number            // Partidas jogadas
  wins: number              // Vitórias
  draws: number             // Empates
  losses: number            // Derrotas
  
  // Estatísticas de Gols
  goalsFor: number          // Gols marcados
  goalsAgainst: number      // Gols sofridos
  goalDifference: number    // Diferença
  
  // Ranking
  points: number            // Pontos totais
  
  // Informações Adicionais
  bio: string               // Biografia do jogador
  stats: PlayerStats        // Estatísticas calculadas
  bestMatches: BestMatch[]  // Melhores partidas/lances
}
```

### Estatísticas do Jogador

```typescript
interface PlayerStats {
  winRate: string           // "75%" ou "-"
  avgGoalsPerMatch: string  // "1.5" ou "-"
  avgGoalsAgainst: string   // "0.8" ou "-"
}
```

### Melhor Lance/Partida

```typescript
interface BestMatch {
  id: string                // Único: "m1", "m2", etc
  date: string              // ISO 8601: "2024-02-21"
  opponent: string          // Nome do adversário
  result: string            // Placar: "3-2", "0-0", etc
  description: string       // Descrição do momento
  highlights: string[]      // Array de destaques
}
```

## Exemplos Práticos

### Exemplo 1: Jogador Completo (com partidas)

```json
{
  "id": "player-1",
  "position": 1,
  "name": "King Kuky",
  "division": 1,
  "played": 1,
  "wins": 0,
  "draws": 1,
  "losses": 0,
  "goalsFor": 0,
  "goalsAgainst": 0,
  "goalDifference": 0,
  "points": 1,
  "bio": "Um dos maiores competidores da 1ª Divisão. Conhecido pela sua determinação e espírito vencedor.",
  "stats": {
    "winRate": "0%",
    "avgGoalsPerMatch": "0.0",
    "avgGoalsAgainst": "0.0"
  },
  "bestMatches": [
    {
      "id": "m1",
      "date": "2024-02-21",
      "opponent": "Rafa",
      "result": "0-0",
      "description": "Estreia memorável com excelente defesa",
      "highlights": [
        "Três grandes defesas",
        "Liderança em campo"
      ]
    }
  ]
}
```

### Exemplo 2: Jogador Novo (sem partidas)

```json
{
  "id": "player-12",
  "position": 6,
  "name": "Novo Jogador",
  "division": 2,
  "played": 0,
  "wins": 0,
  "draws": 0,
  "losses": 0,
  "goalsFor": 0,
  "goalsAgainst": 0,
  "goalDifference": 0,
  "points": 0,
  "bio": "Promessa da 2ª Divisão com muito potencial",
  "stats": {
    "winRate": "-",
    "avgGoalsPerMatch": "-",
    "avgGoalsAgainst": "-"
  },
  "bestMatches": []
}
```

## Mapeamento de Componentes

### Como os dados fluem

```
data/players.json
    ↓
app/page.tsx (Home)
    ├─ StandingsTable
    │   └─ Exibe players
    │       └─ Clique → Link para /player/[id]
    │
    └─ PlayerSearch
        └─ Busca na lista de players
            └─ Clique → Link para /player/[id]

/player/[id]/page.tsx
    ├─ Busca player by id em players.json
    └─ Passa dados para PlayerProfile
        ├─ PlayerStats (exibe cards)
        ├─ StatChart (gráfico de pizza)
        ├─ PlayerStatsExpanded (gráficos barras)
        └─ BestMatchCard[] (cards de melhores lances)
```

## Cálculos Derivados

Alguns valores são calculados a partir dos dados base:

```typescript
// Gols
goalDifference = goalsFor - goalsAgainst

// Pontos (padrão futebol)
points = (wins * 3) + draws

// Taxa de vitória
winRate = played > 0 
  ? ((wins / played) * 100).toFixed(0) + '%'
  : '-'

// Média de gols
avgGoalsPerMatch = played > 0
  ? (goalsFor / played).toFixed(1)
  : '-'

// Média de gols sofridos
avgGoalsAgainst = played > 0
  ? (goalsAgainst / played).toFixed(1)
  : '-'
```

## Índices de Busca

O sistema de busca indexa:

```typescript
// Índice de Busca
interface SearchIndex {
  playerName: string        // "King Kuky"
  playerNameLower: string   // "king kuky"
  playerId: string          // "player-1"
  division: string          // "1 DIVISÃO"
  divisionNumber: number    // 1
  divisionColor: string     // "#ec4899"
}
```

## Validação de Dados

### Campos Obrigatórios
- ✅ `id` - Deve ser único
- ✅ `name` - Não pode estar vazio
- ✅ `position` - Entre 1-11
- ✅ `division` - 1 ou 2
- ✅ `played`, `wins`, `draws`, `losses` - ≥ 0
- ✅ `points` - Deve ser calculado como (wins*3) + draws

### Campos Opcionais
- ⚪ `bio` - String descritiva
- ⚪ `bestMatches` - Pode ser array vazio

## Limites e Restrições

```typescript
// Restrições
const CONSTRAINTS = {
  MAX_PLAYERS_PER_DIVISION: 12,    // Limite sugerido
  MAX_BEST_MATCHES_PER_PLAYER: 10, // Limite sugerido
  MIN_PLAYER_NAME_LENGTH: 2,       // Caracteres
  MAX_PLAYER_NAME_LENGTH: 50,      // Caracteres
  DIVISION_OPTIONS: [1, 2],        // Apenas duas divisões
  POSITION_MIN: 1,                 // Posição mínima
  POSITION_MAX: 11,                // Posição máxima
}
```

## Exemplo de Query

### Obter todos os jogadores de uma divisão

```typescript
const division1Players = playersData.divisions[0].players
// Resultado: Array com 5 jogadores
```

### Encontrar jogador por ID

```typescript
function findPlayerById(id: string) {
  for (const division of playersData.divisions) {
    const player = division.players.find(p => p.id === id)
    if (player) return { player, division }
  }
  return null
}
```

### Buscar jogador por nome

```typescript
function searchPlayerByName(query: string) {
  const results = []
  for (const division of playersData.divisions) {
    const matches = division.players.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    )
    results.push(...matches)
  }
  return results
}
```

### Calcular ranking por pontos

```typescript
function getRankingByDivision(divisionId: number) {
  const division = playersData.divisions.find(d => d.id === divisionId)
  return division?.players.sort((a, b) => b.points - a.points) || []
}
```

## Padrões de Dados

### IDs
- **Player ID**: `player-{1-11}` (format consistente)
- **Match ID**: `m{1-13}` (identificação de lances)

### Datas
- **Formato**: ISO 8601 (`YYYY-MM-DD`)
- **Exemplo**: `"2024-02-21"`

### Cores (Hex)
- **1ª Divisão**: `#ec4899` (RGB: 236, 72, 153)
- **2ª Divisão**: `#06b6d4` (RGB: 6, 182, 212)

### Placar
- **Formato**: `"{gols}-{gols}"`
- **Exemplo**: `"3-2"`, `"0-0"`, `"1-2"`

## Exportação e Integração

### Formato de Saída (API)

```typescript
// Retornar player completo
GET /api/players/:id → Player

// Listar todos
GET /api/players → Player[]

// Por divisão
GET /api/divisions/:id → Division

// Buscar
GET /api/search?q=King → SearchResult[]
```

### Possível Estrutura de API

```typescript
interface ApiResponse<T> {
  success: boolean
  data: T
  error?: string
  timestamp: string
}
```

## Histórico de Alterações

```
v1.0 - 2024-02-21
- Estrutura inicial com 11 jogadores
- Suporte para melhores lances
- Estatísticas básicas
```

## Notas Importantes

1. **IDs únicos**: Cada jogador e lance tem um ID único
2. **Integridade referencial**: BestMatches referencia adversários por nome
3. **Sem relacionamentos complexos**: Estrutura plana para facilitar consultas
4. **Fácil migração**: Pode ser facilmente migrado para banco de dados
5. **Escalável**: Pode suportar múltiplas divisões e temporadas

---

**Versão**: 1.0
**Última atualização**: Fevereiro 2024
