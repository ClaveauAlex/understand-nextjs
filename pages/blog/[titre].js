import React from "react";
import {useRouter} from "next/router";

const Titre = () => {
    const router = useRouter();

    return (
        <h1>{router.query.titre}</h1>
    )
}

export default Titre;

/*Exporté par defaut parce que c'est une page et nnon un composant*/