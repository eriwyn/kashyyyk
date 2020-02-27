import React, { useState }  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';
import uniqid from "uniqid";

export default function ListeElements() {

    const [elementSelected, setElementSelected] = useState("");


    function clickHandler(event) {
        setElementSelected(event.target.id);
    }

    return <ul className="listeElements" onClick={ clickHandler }>
        <li><Element type="champ_texte" libelle="Champ de texte" texte="Entrez du texte" onClick={clickHandler} selected={elementSelected} /></li>
        <li><Element type="bouton" texte="Bouton" onClick={clickHandler} selected={elementSelected} /></li>
        <li><Element type="zone_texte" libelle="Zone de texte" texte="Entrez du texte" onClick={clickHandler} selected={elementSelected} /></li>
        <li><Element type="select" libelle="Menu déroulant" valeurs={["Choix 1", "Choix 2", "Choix 3"]} onClick={clickHandler} selected={elementSelected} /></li>
        <li><Element type="radio" libelle="Boutons radio" valeurs={["Choix 1", "Choix 2", "Choix 3"]} onClick={clickHandler} selected={elementSelected} /></li>
    </ul>
}
