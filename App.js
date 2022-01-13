import React from "react";
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SerieTop10 from './componentes/SerieTop10';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="App">
       <div>
    <PrimeiroComponente title = "Top 10 Melhores series de 2021"/>
    <SerieTop10 serie = "Dopesick" descricao ="A décima posição vai para uma série ainda bem pouco badalada por aqui, porque estreou no fim do ano. Dopesick conta a história do começo da epidemia de opioides nos Estados Unidos que já matou mais de 500 mil pessoas"></SerieTop10>
  </div>
  </div>
)
