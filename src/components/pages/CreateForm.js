import React from 'react';
import Creation from '../creation/Creation.js';

import '../../css/creation/creation.scss';

export default function CreateForm (){
    return <main className="mainPage">
        <h1>Création de Formulaire</h1>
        <button>Sauvegarder</button>
        <Creation type="formulaire"/>
    </main>
}
