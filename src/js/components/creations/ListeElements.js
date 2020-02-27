import React  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';

export default function ListeElements() {

    return <ul className="listeElements">
        <li><Element type="button" mode="html" /></li>
        <li><Element type="text" mode="html" /></li>
    </ul>
}
