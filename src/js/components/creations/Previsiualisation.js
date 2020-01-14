import React, {useState}  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';



export default function Previsualisation() {
const [arrayForm, setForm]=useState([])

    function dragOverHandler(event) {
        event.preventDefault();
    }

    function dropHandler(event) {
        event.preventDefault();
        const id = event
          .dataTransfer
          .getData('text');
      
        setForm(arrayForm.concat(<Element mode={id} />))    
    }


    return <div className="previsualisation" onDragOver={dragOverHandler} onDrop={dropHandler}>
        {arrayForm}
    </div>
}
