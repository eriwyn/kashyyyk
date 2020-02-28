import React, {useState}  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';


export default function PrevisualisationElement(props) {

    props.table.forEach(element => {
        return <Element type={element["type"]} />
    });

    return null;
}
