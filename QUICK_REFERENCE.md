# Referência Rápida - FC26 Player Profile

## Arquivos Principais

### Dados
- `data/players.json` - Base de dados de todos os jogadores e divisões

### Componentes (Cliente)
- `components/StandingsTable.tsx` - Tabela de classificação com linhas clicáveis
- `components/PlayerProfile.tsx` - Componente principal de perfil
- `components/PlayerStats.tsx` - Cards de estatísticas
- `components/StatChart.tsx` - Gráfico de resultados (Recharts)
- `components/BestMatchCard.tsx` - Card individual de melhor lance
- `components/Breadcrumb.tsx` - Navegação por trilha
- `components/PlayerTip.tsx` - Dica visual na home

### Páginas
- `app/page.tsx` - Página inicial com tabelas
- `app/player/[id]/page.tsx` - Perfil dinâmico do jogador
- `app/player/not-found.tsx` - Página 404 customizada

### Documentação
- `PLAYER_PROFILE.md` - Documentação completa
- `QUICK_REFERENCE.md` - Este arquivo

## IDs de Jogadores

### Divisão 1
- `player-1` - King Kuky
- `player-2` - Rafa
- `player-3` - Paridade
- `player-4` - Astro
- `player-5` - Paulo

### Divisão 2
- `player-6` - Fúria
- `player-7` - Júnior
- `player-8` - Herman
- `player-9` - Fidel
- `player-10` - Felisberto
- `player-11` - Fábio

## URLs Úteis

- **Home**: `/`
- **Perfil do Jogador**: `/player/[id]` (ex: `/player/player-1`)
- **Agenda**: `/schedule`
- **Informações do Sorteio**: `/sorteio`

## Cores Temáticas

```css
Divisão 1: #ec4899 (Rosa/Magenta)
Divisão 2: #06b6d4 (Ciano/Azul)
Primary:   #1e40af (Azul)
Accent:    #fbbf24 (Amarelo)
Background: #0a0e27 (Azul muito escuro)
Card BG:   #1a1f3a (Azul escuro)
Text:      #ffffff (Branco)
Muted:     #94a3b8 (Cinza claro)
```

## Estrutura JSON do Jogador

```typescript
interface Player {
  id: string                    // Único, ex: "player-1"
  position: number             // Posição na tabela (1-11)
  name: string                 // Nome completo
  division: number             // 1 ou 2
  played: number               // Partidas jogadas
  wins: number                 // Vitórias
  draws: number                // Empates
  losses: number               // Derrotas
  goalsFor: number             // Gols marcados
  goalsAgainst: number         // Gols sofridos
  goalDifference: number       // Diferença de gols
  points: number               // Pontos totais
  bio: string                  // Biografia/descrição
  stats: {
    winRate: string            // "75%" ou "-"
    avgGoalsPerMatch: string   // "1.5" ou "-"
    avgGoalsAgainst: string    // "0.5" ou "-"
  }
  bestMatches: BestMatch[]     // Array de melhores lances
}

interface BestMatch {
  id: string                   // Único, ex: "m1"
  date: string                 // YYYY-MM-DD
  opponent: string             // Nome do adversário
  result: string               // "2-1"
  description: string          // Descrição da partida
  highlights: string[]         // Array de destaques
}
```

## Comandos Úteis

### Adicionar Novo Jogador
1. Abra `data/players.json`
2. Encontre a divisão apropriada
3. Copie o template abaixo e customize:

```json
{
  "id": "player-XX",
  "position": 99,
  "name": "Nome do Jogador",
  "division": 1,
  "played": 0,
  "wins": 0,
  "draws": 0,
  "losses": 0,
  "goalsFor": 0,
  "goalsAgainst": 0,
  "goalDifference": 0,
  "points": 0,
  "bio": "Descrição bio",
  "stats": {
    "winRate": "-",
    "avgGoalsPerMatch": "-",
    "avgGoalsAgainst": "-"
  },
  "bestMatches": []
}
```

### Adicionar Melhor Lance
Dentro do array `bestMatches` do jogador:

```json
{
  "id": "mXX",
  "date": "2024-02-XX",
  "opponent": "Nome do Adversário",
  "result": "X-X",
  "description": "Descrição memorável",
  "highlights": ["Destaque 1", "Destaque 2", "Destaque 3"]
}
```

## Componentes Reutilizáveis

### Usar PlayerStats em Outro Lugar
```tsx
import { PlayerStats } from '@/components/PlayerStats'

<PlayerStats
  played={5}
  wins={3}
  draws={1}
  losses={1}
  goalsFor={10}
  goalsAgainst={5}
  points={10}
  divisionColor="#ec4899"
/>
```

### Usar StatChart em Outro Lugar
```tsx
import { StatChart } from '@/components/StatChart'

<StatChart
  wins={3}
  draws={1}
  losses={1}
  divisionColor="#06b6d4"
/>
```

### Usar BestMatchCard em Outro Lugar
```tsx
import { BestMatchCard } from '@/components/BestMatchCard'

<BestMatchCard
  date="2024-02-21"
  opponent="Adversário"
  result="2-1"
  description="Vitória importante"
  highlights={["2 gols", "Liderança"]}
  divisionColor="#ec4899"
/>
```

## Navegação entre Componentes

```
Home (/)
├── StandingsTable
│   └── Link → /player/[id]
│
Schedule (/schedule)
├── ScheduleWrapper
│   └── ScheduleDay
│       └── MatchCard

Player Profile (/player/[id])
├── PlayerProfile
│   ├── PlayerStats
│   ├── StatChart
│   └── BestMatchCard (múltiplos)
```

## Performance Tips

1. **Imagens**: Avatares usam iniciais em SVG (sem imagens)
2. **Dados**: Tudo carregado via JSON estático (sem API)
3. **Animações**: Usando CSS nativo, não JavaScript
4. **Responsividade**: Mobile-first com Tailwind

## Troubleshooting

### Jogador não aparece no perfil
- Verifique se o ID existe em `data/players.json`
- Verifique se a URL está correta: `/player/player-1`
- Verifique o console para erros

### Gráfico não mostra
- Confirme que `played > 0`
- Recharts requer dados numéricos válidos
- Verifique console para erros

### Estilos não aparecem
- Certifique-se que Tailwind CSS está compilado
- Verifique se as classes existem em `app/globals.css`
- Limpe cache do navegador (Ctrl+Shift+R)

## Próximos Passos

- [ ] Adicionar fotos de jogadores
- [ ] Integrar base de dados (Supabase/Neon)
- [ ] Sistema de comentários nos perfis
- [ ] Timeline de updates de estatísticas
- [ ] Exportar dados em CSV/PDF
