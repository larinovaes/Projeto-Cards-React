import react from "react";

export default function SerieTop8(props) {
    return(
        <>
           <h2>{props.title}</h2>
           <p>{props.descricao}</p>
        </>
    );
}