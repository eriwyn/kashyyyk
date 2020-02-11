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
            return <div>
                <button className="element" id="button" draggable='true' onDragStart={dragStartHandler}>button</button>
            </div>
            break;
        case 'text':
            return <div>
                <input type="text" className="element" id="text" draggable='true' onDragStart={dragStartHandler} />
            </div>
            break;
    
        default:
            break;
    }
    return <div>
        
    </div>
}
