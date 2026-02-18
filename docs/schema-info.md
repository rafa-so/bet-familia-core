# Schema-Info: Sistema Bet Família ⚽🏆

Este documento descreve a arquitetura de dados e as regras de negócio do banco de dados para o sistema de apostas internas (Bolão). O objetivo é garantir que desenvolvedores ou agentes de IA compreendam as relações e a lógica de pontuação.

## 1. Visão Geral das Tabelas

| Tabela | Função Principal | Chave de Flexibilidade |
| :--- | :--- | :--- |
| **`users`** | Cadastro de participantes e ranking global. | Coluna `total_points` (cache). |
| **`tournaments`** | Definição do campeonato e regras de pontos. | Coluna `config` (JSONB). |
| **`matches`** | Partidas reais com horários e placares oficiais. | Coluna `status`. |
| **`bets`** | Palpites individuais vinculados a usuários e jogos. | Coluna `points_earned`. |

---

## 2. Dicionário de Dados

### `tournaments` (Campeonatos)
* `id`: Identificador único (UUID).
* `name`: Nome do torneio (ex: "Copa do Mundo 2026").
* `config` (JSONB): **Campo crítico.** Define as regras de pontuação para este torneio específico.
    * Exemplo: `{"exact_score": 3, "winner_score": 1, "lock_before_minutes": 10}`.

### `matches` (Partidas)
* `id`: Identificador único (UUID).
* `tournament_id`: FK para a tabela de campeonatos.
* `team_home` / `team_away`: Nomes ou IDs dos times.
* `start_at`: Timestamp UTC de início do jogo.
* `home_score` / `away_score`: Placar oficial (preenchido após o fim do jogo).
* `status`: 
    * `SCHEDULED`: Jogo aguardando início (apostas abertas).
    * `IN_PROGRESS`: Jogo ocorrendo (apostas bloqueadas).
    * `FINISHED`: Jogo encerrado (gatilho para cálculo de pontos).

### `bets` (Apostas/Palpites)
* `id`: Identificador único (UUID).
* `user_id`: FK para o apostador.
* `match_id`: FK para a partida.
* `bet_home_score` / `bet_away_score`: O palpite do usuário.
* `points_earned`: Quantos pontos esta aposta rendeu (calculado após o fim do jogo).

---

## 3. Relacionamentos e Cardinalidade



1.  **Tournament -> Match (1:N)**: Um campeonato possui muitos jogos. Excluir um campeonato deve considerar o comportamento das partidas vinculadas.
2.  **Match -> Bet (1:N)**: Cada partida recebe múltiplas apostas de usuários diferentes.
3.  **User -> Bet (1:N)**: Um usuário realiza muitos palpites ao longo do tempo.
    * **Constraint Única**: Um usuário (`user_id`) só pode ter **uma** aposta por partida (`match_id`).

---

## 4. Lógica de Negócio e Pontuação

### Regras de Cálculo (Engine)
O motor de pontuação deve comparar a `bet` com o `match` quando o status for `FINISHED`:
1.  **Acerto Exato (Ex: 2-1 e 2-1)**: Atribuir valor de `config.exact_score`.
2.  **Acerto de Tendência (Ex: Apostou 1-0, foi 3-1)**: Atribuir valor de `config.winner_score`.
    * *Lógica sugerida*: Comparar o sinal de `(home_score - away_score)`. Se o sinal da aposta for igual ao sinal do resultado real, o vencedor (ou empate) foi previsto corretamente.
3.  **Erro Total**: 0 pontos.

### Integridade Competitiva
* **Bloqueio de Apostas**: Nenhuma `bet` pode ser criada ou editada se `CurrentTime > (match.start_at - tournament.config.lock_before_minutes)`.
* **Atualização de Ranking**: O `user.total_points` deve ser atualizado sempre que uma nova pontuação de aposta for processada para manter a performance da tela de Ranking.

---
*Documentação gerada para orientação de desenvolvimento e integração com LLMs.*