import React  from 'react';
import '../../../css/Creation.scss';


export default function Onglet(props) {
    return <a href="#" className={"onglet" +  props.active} onClick={props.action}>{props.text}</a>
}
