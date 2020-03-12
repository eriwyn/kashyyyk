import React, { useEffect, useState }  from 'react';
import slugify from '../../../tools/slugify.js'

import '../../../css/creation/element.scss';


export default function Element(props) {

    const [elementJson, setElementJson] = useState("");
    const [elementId] = useState("element_" + props.position);
    const [dragClass, setdragClass] = useState("");

    function dragStartHandler(event) {
        event
          .dataTransfer
          .setData('text/plain', elementJson);
    }

    function dragEnterHandler(event) {
        const elementJson = event
          .dataTransfer
          .getData('text');

        const elementArray = JSON.parse(elementJson);

        const currentPosition = event.target.getAttribute("data-position");
        const oldPosition = elementArray["position"];

        if (currentPosition > oldPosition) {
            setdragClass(" dragover-bottom");
        } else if (currentPosition < oldPosition || oldPosition === undefined) {
            setdragClass(" dragover-top");
        }
    }

    function dragLeaveHandler() {
        setdragClass("");
    }

    function dropHandler() {
        setdragClass("");
    }

    const textElement = [
        <label 
            key="textElementLabel" 
            htmlFor={elementId}
        >
            {props.libelle}
        </label>,
        <input 
            key="textElementInput" 
            type="text" id={elementId} 
            name={elementId} 
            placeholder={props.texte} 
        />
    ]

    const buttonElement = [
        <button 
            key="buttonElementButton" 
            id={elementId} 
            name={elementId}
        >
            {props.texte}
        </button>
    ]
    
    const textAreaElement = [
        <label 
            key="textAreaElementLabel" 
            htmlFor={elementId}
        >
            {props.libelle}
        </label>,
        <textarea 
            key="textAreaElementTextArea" 
            id={elementId} 
            name={elementId} 
            placeholder={props.texte} 
        />
    ]

    let selectElement = [];
    let radioElement = [];
    let checkBoxElement = [];

    if (props.valeurs) {
        selectElement = [
            <label 
                key="selectElementLabel" 
                htmlFor={elementId}
            >
                {props.libelle}
            </label>,
            <select 
                key="selectElementSelect" 
                id={elementId} 
                name={elementId}
            >
                {props.valeurs.map((valeur, index) => {
                    return <option 
                        key={index} 
                        value={slugify(valeur)}
                    >
                        {valeur}
                    </option>
                })}
            </select>
        ]
    
        radioElement = [
            props.valeurs.map((valeur, index) => {
                return <div key={index}>
                    <input 
                        type="radio" 
                        id={elementId + '_' + slugify(valeur)} 
                        name={elementId} 
                        value={slugify(valeur)} 
                    />
                    <label htmlFor={elementId + '_' + slugify(valeur)}>
                        {valeur}
                    </label>
                </div>
            })
        ]

        checkBoxElement = [
            props.valeurs.map((valeur, index) => {
                return <div key={index}>
                    <input 
                        type="checkbox" 
                        id={elementId + '_' + slugify(valeur)} 
                        name={elementId + '_' + slugify(valeur)} 
                    />
                    <label htmlFor={elementId + '_' + slugify(valeur)}>
                        {valeur}
                    </label>
                </div>
            })
        ]
    }

    let elementObject;
    let elementJSX;

    switch (props.type) {
        case 'champ_texte':
            elementObject = {
                "type": props.type,
                "libelle": props.libelle, 
                "texte": props.texte
            };
            elementJSX = textElement;
            break;
        case 'zone_texte':
            elementObject = {
                "type": props.type, 
                "libelle": props.libelle,
                "texte": props.texte
            };
            elementJSX = textAreaElement;
            break;
        case 'select':
            elementObject = {
                "type": props.type, 
                "libelle": props.libelle,
                "valeurs": props.valeurs
            };
            elementJSX = selectElement;
            break;
        case 'radio':
            elementObject = {
                "type": props.type, 
                "valeurs": props.valeurs
            };
            elementJSX = radioElement;
            break;
        case 'checkbox':
            elementObject = {
                "type": props.type, 
                "valeurs": props.valeurs
            };
            elementJSX = checkBoxElement;
            break;        
        case 'bouton':
            elementObject = {
                "type": props.type, 
                "texte": props.texte
            };
            elementJSX = buttonElement;
            break;   
        default:
            break;
    }
    elementObject.position = props.position;
    useEffect(() => {
        setElementJson(JSON.stringify(elementObject));
    }, [elementObject]);

    let isSelected = "";

    if (parseInt(props.selected) === parseInt(props.position)) {
        isSelected = " selected";
    }

    return <div 
        className={"element_wrapper" + dragClass}
        data-position={props.position} 
        onDragEnter={dragEnterHandler} 
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
    >
        <div 
            tabindex="0"
            data-position={props.position}
            className={"element" + isSelected} 
            draggable='true' 
            onDragStart={dragStartHandler} 
            onMouseDown={props.onMouseDown}
        >
            {elementJSX}
        </div>
    </div>
}
