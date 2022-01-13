import react from "react";

export default function SerieTop10(props) {
      return(
          <>
             <h2>{props.serie}</h2>
             <p>{props.descricao}</p>
          </>
      );
}