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
    </ul>
}
