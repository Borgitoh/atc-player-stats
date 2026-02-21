# Sistema de Perfil de Jogador FC26

## Visão Geral

O sistema de perfil de jogador permite que usuários cliquem em qualquer linha da tabela de classificação e vejam um perfil profissional e detalhado do jogador, incluindo:

- Informações pessoais e biografia
- Estatísticas completas (partidas, vitórias, empates, derrotas, pontos)
- Gráfico visual de distribuição de resultados
- Melhores lances/partidas memoráveis

## Arquitetura

### Estrutura de Dados

O arquivo `data/players.json` contém todos os jogadores com a seguinte estrutura:

```json
{
  "id": "player-1",
  "name": "King Kuky",
  "division": 1,
  "bio": "Um dos maiores competidores...",
  "played": 1,
  "wins": 0,
  "draws": 1,
  "losses": 0,
  "goalsFor": 0,
  "goalsAgainst": 0,
  "points": 1,
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
      "description": "Estreia memorável...",
      "highlights": ["Três grandes defesas", "Liderança em campo"]
    }
  ]
}
```

### Componentes

#### 1. **StandingsTable** (`components/StandingsTable.tsx`)
- Exibe a tabela de classificação
- Linhas clicáveis que navegam para `/player/[id]`
- Efeitos visuais em hover

#### 2. **PlayerProfile** (`components/PlayerProfile.tsx`)
- Componente principal que organiza o layout do perfil
- Exibe informações do jogador em diferentes seções
- Importa e utiliza subcomponentes

#### 3. **PlayerStats** (`components/PlayerStats.tsx`)
- Grid de cards com todas as estatísticas
- Ícones coloridos para cada métrica
- Design responsivo

#### 4. **StatChart** (`components/StatChart.tsx`)
- Gráfico de pizza usando Recharts
- Mostra distribuição de Vitórias/Empates/Derrotas
- Cores temáticas por divisão

#### 5. **BestMatchCard** (`components/BestMatchCard.tsx`)
- Card individual para cada melhor lance
- Exibe placar, data, opponent, descrição e highlights
- Bordas coloridas conforme a divisão

#### 6. **Breadcrumb** (`components/Breadcrumb.tsx`)
- Navegação por trilha de navegação
- Facilita retorno ao início

### Rota Dinâmica

#### **`app/player/[id]/page.tsx`**
- Rota dinâmica que recebe o ID do jogador como parâmetro
- Busca o jogador nos dados JSON
- Retorna erro 404 se não encontrado
- Passa dados para o componente PlayerProfile

#### **`app/player/not-found.tsx`**
- Página customizada de erro 404
- Design tema escuro consistente

## Fluxo de Usuário

1. **Usuário** está na página inicial (`/`)
2. **Clica** em qualquer linha da tabela de classificação
3. **Navegador** vai para `/player/[id]` onde `[id]` é o ID único do jogador
4. **Sistema** busca o jogador no JSON
5. **Perfil** é exibido com todas as informações
6. **Usuário** pode clicar em "Voltar" para retornar à classificação

## Design

### Cores

- **Fundo**: `#0a0e27` (Azul muito escuro)
- **Divisão 1**: `#ec4899` (Rosa/Magenta)
- **Divisão 2**: `#06b6d4` (Ciano/Azul claro)
- **Primária**: `#1e40af` (Azul)
- **Secundária**: `#4c1d95` (Roxo)
- **Amarelo destaque**: `#fbbf24`

### Tipografia

- **Headings**: Tipografia bold/black
- **Corpo**: Regular com linha-height adequado
- **Acentos**: Cores temáticas

### Responsividade

- **Mobile**: Layout em coluna única
- **Tablet**: 2 colunas em grid
- **Desktop**: Layout completo com grid adaptável

## Como Adicionar Novos Jogadores

1. Abra `data/players.json`
2. Adicione um novo objeto na divisão apropriada
3. Certifique-se de:
   - ID único (ex: `player-12`)
   - Todos os campos obrigatórios preenchidos
   - Bio descritiva
   - Array de melhores lances (pode ser vazio)

Exemplo:
```json
{
  "id": "player-12",
  "position": 7,
  "name": "Novo Jogador",
  "division": 1,
  "played": 0,
  "wins": 0,
  "draws": 0,
  "losses": 0,
  "goalsFor": 0,
  "goalsAgainst": 0,
  "goalDifference": 0,
  "points": 0,
  "bio": "Descrição do jogador",
  "stats": {
    "winRate": "-",
    "avgGoalsPerMatch": "-",
    "avgGoalsAgainst": "-"
  },
  "bestMatches": []
}
```

## Como Editar Melhores Lances

Cada jogador tem um array `bestMatches`. Para adicionar um novo lance:

```json
{
  "id": "m14",
  "date": "2024-02-24",
  "opponent": "Adversário",
  "result": "2-1",
  "description": "Descrição do momento",
  "highlights": ["Destaque 1", "Destaque 2"]
}
```

## Dependências

- **React 19**: Componentes client-side
- **Next.js 16**: Roteamento dinâmico e SSR
- **Recharts**: Gráficos de dados
- **Lucide React**: Ícones
- **Tailwind CSS v4**: Estilos

## Performance

- Páginas geradas estaticamente no build
- Sem chamadas de API (dados JSON local)
- Animações CSS otimizadas
- Imagens não usadas (avatares são iniciais em SVG)

## Segurança

- Sem entrada de usuário (apenas leitura de JSON)
- IDs validados antes de exibir dados
- Erro 404 customizado para IDs inválidos

## Futuras Melhorias

- [ ] Adicionar fotos de jogadores
- [ ] Sistema de ranking histórico
- [ ] Comparação entre jogadores
- [ ] Timeline de partidas
- [ ] Vídeos de melhores lances (embeds)
- [ ] Estatísticas sazonais
