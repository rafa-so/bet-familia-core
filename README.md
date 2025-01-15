# bet-familia-core

## Motivação
Este projeto tem duas principais motivações:
1. Estudar de forma mais prática o que tenho visto em aula sobre `Clean Arch` e `DDD`.
2. Além de modelar o problema todo do `zero`, é solidificar mais meus conhecimentos com `Engenharia de Requisitos`, `Engenharia de Plataforma`, e mais alguns detalhes técnicos de node.

Para isso, pensei em resolver um "problema" que temos na família de tempos em tempos.

Gostamos de apostar em jogos, seja em `Copa do Mundo de Futebol`, em `Campeonados Internacionais` ou `Olimpíadas`. Por isso, pensei em criar um projeto que ajudaria a família como um todo a se divertir, e a estudar melhor alguns assuntos técnicos que já venho estudado.

## Escopo
O projeto deverá permitir que um usuário crie um determinado evento. Este evento poderá ter um ou mais jogos, ou disputas associado. Cada evento terá uma data final para apuração dos resultados.

Cada disputa, terá associada a ela lances. Lances são exatamento o objetivo da aposta. Neste contexto inicial, ou será por placar (quem acertar o placar) ou vitória (quem acerta o vencedor). Para o acerto do placar deverá contabilizar `3 pontos` para cada participante que acertou e `1 ponto` para cada parcipante que não acertou o placar, mas acertou a vitória.

O sistema deverá no final de cada disputa contabilizar uma parcial de todos os participantes, e no final do evento deverá fazer um ranking.

