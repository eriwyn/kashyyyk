import React, { useState }  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';

export default function ListeElements() {

    const [elementSelected, setElementSelected] = useState("");


    function isSelected(elementId) {
        if (elementId === elementSelected) {
            return "selected";
        }

        return "";
    }


    function clickHandler(event) {
        setElementSelected(event.target.id);
    }

    return <ul className="listeElements" onClick={ clickHandler }>
        <li><Element type="texte" id="textElement" libelle="Champ de texte" texte="Entrez du texte" onMouseDown={clickHandler} selected={isSelected("textElementWrapper")} /></li>
        <li><Element type="bouton" id="buttonElement" texte="Bouton" onMouseDown={clickHandler} selected={isSelected("buttonElementWrapper")} /></li>
    </ul>
}
