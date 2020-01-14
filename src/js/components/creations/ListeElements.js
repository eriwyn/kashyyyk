import React  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';

export default function ListeElements() {

    return <div className="listeElements">
        <Element mode="button" />
        <Element mode="text" />
    </div>
}
