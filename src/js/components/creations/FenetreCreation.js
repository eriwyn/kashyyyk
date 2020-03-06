import React  from 'react';
import '../../../css/Creation.scss';
import BoiteAOutilsForm from './BoiteAOutilsForm.js';
import BoiteAOutilsTable from './BoiteAOutilsTable.js';
import PrevisualisationForm from './PrevisualisationForm';
import PrevisualisationTable from './PrevisualisationTable';
import ListeElements from './ListeElements';


export default function FenetreCreation(props) {

    const CreationFormulaire = () => {
        return <div className="fenetreCreation">
            <div>
                <BoiteAOutilsForm />
                <PrevisualisationForm />
            </div>
            <ListeElements type="formulaire" />
        </div>
    }

    const CreationTableau = () => {
        return <div className="fenetreCreation">
            <div>
                <BoiteAOutilsTable />
                <PrevisualisationTable type="tableau" />
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
