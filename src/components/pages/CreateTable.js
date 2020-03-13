import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import Creation from '../creation/Creation.js';
import ImportTable from '../creation/table/ImportTable.js'

import '../../css/creation/creation.scss';

export default function CreateTable (){
    return <main className="createTablePage">
        <h1>Création de Tableau</h1>
        <button className="saveButton"><FontAwesomeIcon icon={faSave}></FontAwesomeIcon> Sauvegarder</button>
        <ImportTable />
        <Creation type="tableau"/>
    </main>
}
