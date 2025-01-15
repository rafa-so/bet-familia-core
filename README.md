# bet-familia-core

## Motivação
Este projeto tem três principais motivações:
1. Estudar de forma mais prática o que tenho visto em aula sobre `Clean Arch` e `DDD`.
2. Além de modelar o problema todo do `zero`, é solidificar mais meus conhecimentos com `Engenharia de Requisitos`, `Engenharia de Plataforma`, e mais alguns detalhes técnicos de node.
3. Pegar um problema real, e conversar sobre ele com pessoas reais.

Para isso, pensei em resolver um "problema" que temos na família de tempos em tempos.

Gostamos de apostar em jogos, seja em `Copa do Mundo de Futebol`, em `Campeonados Internacionais` ou `Olimpíadas`. Por isso, pensei em criar um projeto que ajudaria a família como um todo a se divertir, e a estudar melhor alguns assuntos técnicos que já venho estudado.

## Escopo
O projeto deverá permitir que um usuário crie um determinado evento. Este evento poderá ter um ou mais jogos, ou disputas associado. Cada evento terá uma data final para apuração dos resultados.

Cada disputa, terá associada a ela lances. Lances são exatamento o objetivo da aposta. Neste contexto inicial, ou será por placar (quem acertar o placar) ou vitória (quem acerta o vencedor). Para o acerto do placar deverá contabilizar `3 pontos` para cada participante que acertou e `1 ponto` para cada parcipante que não acertou o placar, mas acertou a vitória.

O sistema deverá no final de cada disputa contabilizar uma parcial de todos os participantes, e no final do evento deverá fazer um ranking.

## Documentação
Se por qualquer motivo quiser dar uma olhada na documentação, só consultar a `Wiki`, lá vai ter desde a documentação mais técnica, quando as decisões de arquitetura e design.

## Instalação
### Plantuml
Para instalação do PlantUML, por enquanto é necessário instalar as dependências de forma explícita na máquina.

Se não tiver o `Java` instalado na máquina:
```
$ sudo apt update
```

Verifique as versões disponíveis no repositório do `ubuntu`:
```
$ apt search openjdk | grep -E 'openjdk-.*-jdk/'
```
Eu no caso escolhi o `21`, mas desde que seja maior que o `8`está tudo bem qualquer versão.

Instalação da versão selecionada:
```
$ sudo apt install openjdk-[versao]-jdk
```

Verificação de instalação com sucesso:
```
$ java --version
```

Ajuste no `bashrc` da máquina:
```
$ vim ~/.bashrc
```

Incluir no final do arquivo:
```
export JAVA_HOME=/usr/lib/jvm/java-18-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
```
Salvar as alterções com `CTRL+":"+x`. Este comando já salva e fecha o `vim`.

Recarregar as configurações:
```
$ source ~/.bashrc
```
Instalar o `GraphViz`:
```
$ sudo apt install graphviz
```
Pronto, o plantuml pode já ser usado.

Iniciando o plantserver:
```
$ java -jar plantuml.jar -picoweb
```