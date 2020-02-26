import React  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';

export default function ListeElements() {

    return <div className="listeElements">
        <Element type="button" mode="html" />
        <Element type="text" mode="html" />
    </div>
}
