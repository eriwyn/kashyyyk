import React  from 'react';
import '../../../css/Creation.scss';
import BoiteAOutils from './BoiteAOutils.js';
import Previsualisation from './Previsualisation';
import ListeElements from './ListeElements';


export default function FenetreCreation(props) {

    return <div className="fenetreCreation">
        <div>
            <BoiteAOutils />
            <Previsualisation />
        </div>
        <ListeElements />
    </div>
}
