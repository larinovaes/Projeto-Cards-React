import React from "react";
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SerieTop10 from './componentes/SerieTop10';
import SerieTop6 from "./componentes/SerieTop6";
import SerieTop7 from "./componentes/SerieTop7";
import SerieTop8 from "./componentes/SerieTop8";
import SerieTop9 from './componentes/SerieTop9';
import SerieTop5 from './componentes/SerieTop5';
import SerieTop4 from "./componentes/SerieTop4";
import SerieTop3 from "./componentes/SerieTop3";
import SerieTop2 from "./componentes/SerieTop02";
import SerieTop1 from "./componentes/SerieTop1";

// eslint-disable-next-line import/no-anonymous-default-export
  export default (props) => (
    <div className="App">
        <div className=" Series">
            <PrimeiroComponente title = "Top 10 Melhores series de 2021"/>
            <SerieTop10 title = "10. Dopesick" descricao ="A décima posição vai para uma série ainda bem pouco badalada por aqui, porque estreou no fim do ano. Dopesick conta a história do começo da epidemia de opioides nos Estados Unidos que já matou mais de 500 mil pessoas"/>
            <SerieTop9 title = "09. Maid" descricao = "A nona posição tem uma minissérie dramática sobre uma mulher que trabalha como faxineira para tentar pagar as contas e cuidar da filhinha. “Maid” conseguiu uma raridade: ela é muito elogiada pela crítica, mas também bombou, e terminou 2021 como uma das séries mais buscadas do ano no Google." />
            <SerieTop8 title = "08. Evil" descricao = "Evil junta um padre, uma psicóloga, mãe de quatro meninas, e um especialista em tecnologia bem cético para investigar eventos sobrenaturais e tentar saber se são milagres, possessões demoníacas ou frutos de problemas psiquiátricos e afins."/>
            <SerieTop7 title = "07. Wandavision" descricao = "Wandavision mostra o casal de heróis Wanda e Visão vivendo uma vida de sitcom americana. Em cada episódio eles aparecem como protagonistas de uma série de comédia de uma década diferente. É bem divertido, mas tem um mistério por trás." />
            <SerieTop6 title = "06. Mare of the Easttown" descricao = "Essa minissérie conta a história de uma detetive de uma cidadezinha americana da Pensilvânia que investiga um assassinato e luta para manter a vida dela nos eixos"/>
            <SerieTop5 title = "05. The white lotus" descricao = "Essa comédia dramática conta em sete episódios a história da relação entre hóspedes e staff de um resort no Havaí, focando na relação entre eles durante uma semana de estadia. As situações são muito bem desenvolvidas, as tensões vão se acumulando. Você assiste sempre com aquela sensação de que algo vai dar errado."/>
            <SerieTop4 title = "04. Hacks" descricao = "Uma comédia sobre duas comediantes tem o honroso quarto lugar do ano. Uma veterana meio que em fim de carreira e uma jovem promissora que acaba de ser cancelada na internet que se juntam meio a contragosto porque precisam se ajudar"/>
            <SerieTop3 title = "03. Only murders in the building" descricao = "A série se passa num edifício badalado em Nova York (até o Sting mora lá) e conta a história de três vizinhos viciados em podcasts. Eles decidem investigar um crime depois que a polícia resolve o caso dizendo que foi suicídio."/>
            <SerieTop2 title = "02. Round 6" descricao = "A série sul-coreana é sobre um monte de gente desempregada e endividada que aceita participar de brincadeiras mortais com a promessa de que quem sair vivo da disputa ganha US$ 40 milhões" />
            <SerieTop1 title = "01. Ted lasso" descricao = "Faz sentido uma série tão good vibes fazer tanto sucesso e ficar no topo da nossa lista. Em tempos tão difíceis, tudo que a gente precisa é de um bigodudo tratando os jogadores como se todos fossem uma família." />
          </div>
    </div>
)
