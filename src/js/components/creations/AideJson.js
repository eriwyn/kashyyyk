import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import '../../../css/Json.scss';
export default function AideJson(props){
       
        //'{"elements":[{"genre":"input","libelle":"nom","type":"text"} ,{"genre":"select","libelle":"selection","options":["option1","option2","option3"]},{"genre":"radio","libelle":"pays","values":["value1","value2","value3"]}]}';
        //'{"elements":[{"libelle":"titreMenu","sousMenu":[]},{"libelle":"titreMenu2","sousMenu":[{"libelle":"sousTitreMenu3"},{"libelle":"sousTitreMenu5"}]}]}';
        //'{"elements":[{"thead":["contenu","contenu2","contenu3"]},{"ligne":["truc","bidule","machin"]},{"ligne":["contenuLigne","contenuLigne2","autreContenuLigne"]},{"tfoot":["finLigne","finLigne2","finLigne3"]}]}';
    const [viewTooltip, setViewTooltip]=useState('none');

    const handleClick=()=>{
        console.log("bro")
        setViewTooltip('block')
        window.addEventListener("keypress",click) 
    }

    const handlePress=()=>{
        setViewTooltip('block');
    }
        
    function click(){

        console.log("fuck u")
        setViewTooltip('none');
        window.removeEventListener("click",click);

    }
  return <div className="tooltip" >
    <button id="btnAide" onKeyPress={handlePress}><FontAwesomeIcon icon={faQuestionCircle} onClick={handleClick} /></button>
    <span className="tooltiptext" style={{'display' : viewTooltip}}>{props.text}</span>
  </div>
}
