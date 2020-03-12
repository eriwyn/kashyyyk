import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import Creation from '../creation/Creation.js';

import '../../css/creation/creation.scss';

export default function CreateForm (){
    return <main className="createFormPage">
        <h1>Création de Formulaire</h1>
        <button className="saveButton"><FontAwesomeIcon icon={faSave}></FontAwesomeIcon> Sauvegarder</button>
        <Creation type="formulaire"/>
    </main>
}
