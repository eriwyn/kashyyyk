import React  from 'react';
import '../../../css/Creation.scss';
import BoiteAOutils from './BoiteAOutils.js';
import Previsualisation from './Previsualisation';
import ListeElements from './ListeElements';


export default function FenetreCreation(props) {

    const CreationFormulaire = () => {
        return <div className="fenetreCreation">
            <div>
                <BoiteAOutils type="formulaire" />
                <Previsualisation type="formulaire" />
            </div>
            <ListeElements type="formulaire" />
        </div>
    }

    const CreationTableau = () => {
        return <div className="fenetreCreation">
            <div>
                <BoiteAOutils type="tableau" />
                <Previsualisation type="tableau" />
            </div>
        </div>
    }

    switch (props.type) {
        case "formulaire":
            return <CreationFormulaire />
        case "tableau":
            return <CreationTableau />
    
        default:
            return <div></div>
    }
}
