import React  from 'react';
import '../../../css/Creation.scss';
import BoiteAOutils from './BoiteAOutils.js';
import Previsiualisation from './Previsiualisation';
import ListeElements from './ListeElements';


export default function FenetreCreation(props) {

    return <div className="fenetreCreation">
        <h1>Création</h1>

        <BoiteAOutils />
        <Previsiualisation />
        <ListeElements />
    </div>
}
