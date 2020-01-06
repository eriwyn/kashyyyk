import React  from 'react';
import '../../css/Bouton.scss';


export default function Bouton(props) {

    return <a href="#" className="bouton" onClick={props.action}> {props.text} </a>
}
