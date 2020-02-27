import React, { useEffect, useState }  from 'react';
import '../../../css/Creation.scss';
import uniqid from "uniqid";
import slugify from '../../tools/slugify.js'


export default function Element(props) {

    const [selected, setSelected] = useState("");
    const [elementJson, setElementJson] = useState("");
    const [elementId, setElementId] = useState(uniqid(props.type + "_"));


    function dragStartHandler(event) {
        event
          .dataTransfer
          .setData('text/plain', elementJson);
    }

    const TextElement = () => {
        return <div>
            <label htmlFor={elementId}>{props.libelle}</label>
            <input type="text" id={elementId} name={elementId} placeholder={props.texte} />
        </div>
    }

    const ButtonElement = () => {
        return <div>
            <button id={elementId} name={elementId}>{props.texte}</button>
        </div>
    }

    const TextAreaElement = () => {
        return <div>
            <label htmlFor={elementId}>{props.libelle}</label>
            <textarea id={elementId} name={elementId} placeholder={props.texte} />
        </div>
    }

    const SelectElement = () => {
        return <div>
            <label htmlFor={elementId}>{props.libelle}</label>
            <select id={elementId} name={elementId}>
                {props.valeurs.map((valeur, index) => {
                    return <option key={index} value={slugify(valeur)}>{valeur}</option>
                })}
            </select>
        </div>
    }

    let elementContent;
    let elementObject;

    switch (props.type) {
        case 'champ_texte':
            elementContent = <TextElement />
            elementObject = {
                "type": props.type,
                "id": elementId,
                "libelle": props.libelle, 
                "texte": props.texte
            };
            break;
        
        case 'bouton':
            elementContent =  <ButtonElement />
            elementObject = {
                "type": props.type, 
                "id": elementId,
                "texte": props.texte
            };
            break;

        case 'zone_texte':
            elementContent =  <TextAreaElement />
            elementObject = {
                "type": props.type, 
                "id": elementId,
                "libelle": props.libelle,
                "texte": props.texte
            };
            break;

        case 'select':
            elementContent =  <SelectElement />
            elementObject = {
                "type": props.type, 
                "id": elementId,
                "libelle": props.libelle,
                "valeurs": props.valeurs
            };
            break;
    
        default:
            break;
    }

    useEffect(() => {
        if (props.selected === elementId + "_Wrapper") {
            setSelected("selected");
        } else {
            setSelected("");
        }
        
        if (props.id) {
            setElementId(props.id);
        }

        setElementJson(JSON.stringify(elementObject));
    });

    return <div id={elementId + "_Wrapper"} className={"element " + selected} draggable='true' onDragStart={dragStartHandler} onClick={props.onClick}>
        {elementContent}
    </div>   
}
