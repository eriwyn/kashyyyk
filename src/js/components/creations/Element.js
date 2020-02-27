import React, { useEffect, useState }  from 'react';
import '../../../css/Creation.scss';


export default function Element(props) {

    const [selected, setSelected] = useState("");
    const [elementJson, setElementJson] = useState("");

    function dragStartHandler(event) {
        event
          .dataTransfer
          .setData('text/plain', elementJson);
    }

    const TextElement = () => {
        return <div>
            <label htmlFor={props.id}>{props.libelle}</label>
            <input type="text" id={props.id} name={props.id} placeholder={props.texte} />
        </div>
    }

    const ButtonElement = () => {
        return <div>
            <button id={props.id} name={props.id}>{props.texte}</button>
        </div>
    }

    let elementContent;
    let elementObject;

    switch (props.type) {
        case 'champ_texte':
            elementContent = <TextElement />
            elementObject = {
                "type": props.type,
                "id": props.id,
                "libelle": props.libelle, 
                "texte": props.texte
            };
            break;
        
        case 'bouton':
            elementContent =  <ButtonElement />
            elementObject = {
                "type": props.type, 
                "id": props.id,
                "texte": props.texte
            };
            break;
    
        default:
            break;
    }

    useEffect(() => {
        setSelected(props.selected);
        setElementJson(JSON.stringify(elementObject));
    });

    return <div id={props.id + "Wrapper"} className={"element " + selected} draggable='true' onDragStart={dragStartHandler} onClick={props.onClick}>
        {elementContent}
    </div>   
}
