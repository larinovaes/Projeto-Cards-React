import react from "react";

export default function SerieTop3(props) {
    return(
        <>
            <h2>{props.title}</h2>
            <p>{props.descricao}</p>
        </>
    );
}