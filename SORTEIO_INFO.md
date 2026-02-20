# FC26 - Sistema de Classificação e Sorteio

## Visão Geral

Aplicação profissional de gerenciamento de liga de futebol com sistema de classificação e sorteio automático de jogos.

## Estrutura de Dados

### Dados de Jogadores (`data/players.json`)

```json
{
  "divisions": [
    {
      "id": 1,
      "name": "1 DIVISÃO",
      "players": [
        {
          "position": 1,
          "name": "King Kuky",
          "played": 8,
          "wins": 6,
          "draws": 1,
          "losses": 1,
          "goalsFor": 18,
          "goalsAgainst": 5,
          "goalDifference": 13,
          "points": 19
        }
      ]
    }
  ]
}
```

### Dados de Partidas (`data/matches.json`)

```json
{
  "schedule": {
    "21": {
      "date": "21 de Fevereiro",
      "dayOfWeek": "Sabado",
      "matches": [
        {
          "id": 1,
          "time": "19:30",
          "division": "1 DIVISÃO",
          "home": "King Kuky",
          "away": "Paulo",
          "status": "scheduled"
        }
      ]
    }
  }
}
```

## Rotas da Aplicação

### 1. Classificação (`/`)
- Exibe a tabela de classificação de ambas as divisões
- Mostra: Posição, Jogador, Partidas, Vitórias, Empates, Derrotas, Pontos
- Link para a agenda de jogos

### 2. Agenda de Jogos (`/schedule`)
- Lista todos os jogos sorteados por dia (21, 22, 23 de Fevereiro)
- Filtro por divisão (Todos, 1ª Divisão, 2ª Divisão)
- Exibição de informações do sorteio
- Status das partidas (agendada, ao vivo, finalizada)

### 3. Informações do Sorteio (`/sorteio`)
- Explicação do sistema de sorteio automático
- Estatísticas das divisões
- Metodologia utilizada (Fisher-Yates)

## Componentes Principais

### Components
- **Navigation**: Navegação global com links para as principais seções
- **StandingsTable**: Tabela de classificação de uma divisão
- **LeagueHeader**: Header com informações da liga
- **MatchCard**: Card individual de uma partida
- **ScheduleDay**: Agrupa partidas por dia
- **ScheduleWrapper**: Gerencia filtros de divisão
- **DivisionFilter**: Filtro interativo de divisão
- **SorteoInfo**: Informações sobre o sorteio
- **ScheduleDay**: Exibição de jogos por dia

## Tecnologias Utilizadas

- **Next.js 16**: Framework React com App Router
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Styling
- **Lucide React**: Ícones
- **JSON**: Armazenamento de dados

## Design Visual

### Paleta de Cores
- **Background**: #0a0e27 (azul escuro)
- **Primary**: #1e40af (azul brilhante)
- **Accent**: #fbbf24 (amarelo)
- **Division 1**: #ec4899 (rosa/magenta)
- **Division 2**: #06b6d4 (ciano)
- **Text**: #ffffff, #94a3b8

### Efeitos Visuais
- Gradientes suaves
- Desfoque (blur) de fundo
- Sombras com brilho neon
- Animações de hover
- Transições suaves

## Sistema de Sorteio

### Algoritmo: Fisher-Yates
O sorteio utiliza o algoritmo Fisher-Yates para garantir uma distribuição completamente aleatória:

1. Embaralha o array de partidas
2. Distribui as partidas uniformemente entre os dias
3. Garante que nenhuma divisão seja prejudicada

### Estatísticas
- **1ª Divisão**: 5 jogadores, 5 partidas sorteadas
- **2ª Divisão**: 6 jogadores, 10 partidas sorteadas
- **Total**: 15 partidas em 3 dias

## Como Editar Dados

### Atualizar Jogadores
Edite `/data/players.json` e adicione/modifique os dados dos jogadores:

```json
{
  "position": 1,
  "name": "Nome do Jogador",
  "played": 8,
  "wins": 6,
  "draws": 1,
  "losses": 1,
  "goalsFor": 18,
  "goalsAgainst": 5,
  "goalDifference": 13,
  "points": 19
}
```

### Atualizar Jogos
Edite `/data/matches.json` para modificar o cronograma:

```json
{
  "id": 1,
  "time": "19:30",
  "division": "1 DIVISÃO",
  "home": "Jogador Casa",
  "away": "Jogador Visitante",
  "status": "scheduled" // ou "live" ou "finished"
}
```

## Funcionalidades

- ✅ Classificação por divisão
- ✅ Sorteio automático de jogos
- ✅ Agenda detalhada com horários
- ✅ Filtro de divisão na agenda
- ✅ Navegação responsiva
- ✅ Design profissional estilo esports
- ✅ Informações do sorteio
- ✅ Dados em JSON editáveis

## Próximas Funcionalidades

- [ ] Sistema de resultados ao vivo
- [ ] Histórico de jogos realizados
- [ ] Estatísticas detalhadas de jogadores
- [ ] Sistema de ranking global
- [ ] Notificações de próximos jogos
- [ ] API para integração externa

## Contribuição

Para adicionar ou modificar funcionalidades:

1. Atualize os dados em `/data/`
2. Modifique ou crie novos componentes em `/components/`
3. Ajuste as rotas conforme necessário em `/app/`

---

Desenvolvido com ❤️ para FC26 Official
