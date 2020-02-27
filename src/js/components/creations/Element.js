import React  from 'react';
import '../../../css/Creation.scss';


export default function Element(props) {

    function dragStartHandler(event) {
        console.log(event);
        event
          .dataTransfer
          .setData('text/plain', event.target.id);
      
    }      

    switch (props.type) {
        case 'button':
            return <div className="element" id="elementButton" draggable='true' onDragStart={dragStartHandler}>
                <button>Bouton</button>
            </div>
            break;
        case 'text':
            return <div className="element" id="elementText" draggable='true' onDragStart={dragStartHandler}>
                <input type="text"/>
            </div>
            break;
    
        default:
            break;
    }
    return <div>
        
    </div>
}
