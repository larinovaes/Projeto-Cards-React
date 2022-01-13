import React from "react";
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SerieTop10 from './componentes/SerieTop10';
import SerieTop8 from "./componentes/SerieTop8";
import SerieTop9 from './componentes/SerieTop9';

// eslint-disable-next-line import/no-anonymous-default-export
  export default (props) => (
    <div className="App">
        <div>
            <PrimeiroComponente title = "Top 10 Melhores series de 2021"/>
            <SerieTop10 title = "Dopesick" descricao ="A décima posição vai para uma série ainda bem pouco badalada por aqui, porque estreou no fim do ano. Dopesick conta a história do começo da epidemia de opioides nos Estados Unidos que já matou mais de 500 mil pessoas"></SerieTop10>
            <SerieTop9 title = "Maid" descricao = "A nona posição tem uma minissérie dramática sobre uma mulher que trabalha como faxineira para tentar pagar as contas e cuidar da filhinha. “Maid” conseguiu uma raridade: ela é muito elogiada pela crítica, mas também bombou, e terminou 2021 como uma das séries mais buscadas do ano no Google." />
            <SerieTop8 title = "Evil" descricao = "Evil junta um padre, uma psicóloga, mãe de quatro meninas, e um especialista em tecnologia bem cético para investigar eventos sobrenaturais e tentar saber se são milagres, possessões demoníacas ou frutos de problemas psiquiátricos e afins."/>
          </div>
    </div>
)
