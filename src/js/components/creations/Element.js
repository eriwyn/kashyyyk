import React  from 'react';
import '../../../css/Creation.scss';


export default function Element(props) {

    switch (props.mode) {
        case 'button':
            return <div>
                <button className="element">test</button>
            </div>
            break;
    
        default:
            break;
    }
    return <div>
        
    </div>
}
