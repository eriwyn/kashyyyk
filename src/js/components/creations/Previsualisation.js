import React, {useState}  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';
import PrevisualisationCode from './PrevisualisationCode.js';
import PrevisualisationElements from './PrevisualisationElements.js';

export default function Previsualisation() {
    const [arrayForm, setForm]=useState([]);

    function dragOverHandler(event) {
        event.preventDefault();
    }

    function dropHandler(event) {
        event.preventDefault();
        const id = event
          .dataTransfer
          .getData('text');

        switch (id) {
            case 'button':
                const button = {"genre": "input", "libelle": "button", "type": "button"}
                setForm(arrayForm.concat(button))
                break;
        
            default:
                break;
        }
    }


    return <div className="previsualisation" onDragOver={dragOverHandler} onDrop={dropHandler}>
        <PrevisualisationCode table={arrayForm} />
        <PrevisualisationElements table={arrayForm} />
    </div>
}
