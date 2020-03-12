import React from 'react';
import Creation from '../creation/Creation.js';

import '../../css/creation/creation.scss';

export default function CreateTable (){
    return <main className="mainPage">
        <h1>Création de Tableau</h1>
        <button>Sauvegarder</button>
        <Creation type="tableau"/>
    </main>
}
