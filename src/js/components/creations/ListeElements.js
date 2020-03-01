import React, { useState }  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';

export default function ListeElements() {

    const [elementSelected, setElementSelected] = useState("");


    function clickHandler(event) {
        setElementSelected(event.target.id);
    }

    return <ul className="listeElements" onClick={ clickHandler }>
        <li><Element type="champ_texte" id="champ_texte" libelle="Champ de texte" texte="Entrez du texte" onClick={clickHandler} selected={elementSelected} /></li>
        <li><Element type="zone_texte" id="zone_texte" libelle="Zone de texte" texte="Entrez du texte" onClick={clickHandler} selected={elementSelected} /></li>
        <li><Element type="select" id="select" libelle="Menu déroulant" valeurs={["Choix 1", "Choix 2", "Choix 3"]} onClick={clickHandler} selected={elementSelected} /></li>
        <li><Element type="radio" id="radio" valeurs={["Choix 1", "Choix 2", "Choix 3"]} onClick={clickHandler} selected={elementSelected} /></li>
        <li><Element type="checkbox" id="checkbox" valeurs={["Choix 1", "Choix 2", "Choix 3"]} onClick={clickHandler} selected={elementSelected} /></li>
        <li><Element type="bouton" id="bouton" texte="Bouton" onClick={clickHandler} selected={elementSelected} /></li>
    </ul>
}
