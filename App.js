import React from "react";
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SerieTop10 from './componentes/SerieTop10';
import SerieTop6 from "./componentes/SerieTop6";
import SerieTop7 from "./componentes/SerieTop7";
import SerieTop8 from "./componentes/SerieTop8";
import SerieTop9 from './componentes/SerieTop9';
import SerieTop5 from './componentes/SerieTop5';

// eslint-disable-next-line import/no-anonymous-default-export
  export default (props) => (
    <div className="App">
        <div>
            <PrimeiroComponente title = "Top 10 Melhores series de 2021"/>
            <SerieTop10 title = "10. Dopesick" descricao ="A décima posição vai para uma série ainda bem pouco badalada por aqui, porque estreou no fim do ano. Dopesick conta a história do começo da epidemia de opioides nos Estados Unidos que já matou mais de 500 mil pessoas"/>
            <SerieTop9 title = "09. Maid" descricao = "A nona posição tem uma minissérie dramática sobre uma mulher que trabalha como faxineira para tentar pagar as contas e cuidar da filhinha. “Maid” conseguiu uma raridade: ela é muito elogiada pela crítica, mas também bombou, e terminou 2021 como uma das séries mais buscadas do ano no Google." />
            <SerieTop8 title = "08. Evil" descricao = "Evil junta um padre, uma psicóloga, mãe de quatro meninas, e um especialista em tecnologia bem cético para investigar eventos sobrenaturais e tentar saber se são milagres, possessões demoníacas ou frutos de problemas psiquiátricos e afins."/>
            <SerieTop7 title = "07. Wandavision" descricao = "Wandavision mostra o casal de heróis Wanda e Visão vivendo uma vida de sitcom americana. Em cada episódio eles aparecem como protagonistas de uma série de comédia de uma década diferente. É bem divertido, mas tem um mistério por trás." />
            <SerieTop6 title = "06. Mare of the Easttown" descricao = "Essa minissérie conta a história de uma detetive de uma cidadezinha americana da Pensilvânia que investiga um assassinato e luta para manter a vida dela nos eixos"/>
            <SerieTop5 title = "05. The white lotus" descricao = "Essa comédia dramática conta em sete episódios a história da relação entre hóspedes e staff de um resort no Havaí, focando na relação entre eles durante uma semana de estadia. As situações são muito bem desenvolvidas, as tensões vão se acumulando. Você assiste sempre com aquela sensação de que algo vai dar errado."/>
          </div>
    </div>
)
