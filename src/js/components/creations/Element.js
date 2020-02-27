import React, { useEffect, useState }  from 'react';
import '../../../css/Creation.scss';


export default function Element(props) {

    const [selected, setSelected] = useState("");

    function dragStartHandler(event) {
        event
          .dataTransfer
          .setData('text/plain', event.target.id);
    }


    useEffect(() => {
        setSelected(props.selected);
    });

    const TextElement = () => {
        return <div>
            <label for={props.id}>{props.libelle}</label>
            <input type="text" id={props.id} name={props.id} placeholder={props.texte} />
        </div>
    }

    const ButtonElement = () => {
        return <div>
            <button id={props.id} name={props.id}>{props.texte}</button>
        </div>
    }

    const ContentElement = () => {
        switch (props.type) {
            case 'texte':
                return <TextElement />
                break;
            
            case 'bouton':
                return <ButtonElement />
                break;
        
            default:
                break;
        }
    }

    
    return <div id={props.id + "Wrapper"} className={"element " + selected} draggable='true' onDragStart={dragStartHandler} onClick={props.onClick}>
        <ContentElement />
    </div>
}
