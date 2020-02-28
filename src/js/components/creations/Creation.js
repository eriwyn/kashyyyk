import React  from 'react';
import '../../../css/Creation.scss';
import Onglet from './Onglet.js';
import FenetreCreation from './FenetreCreation.js';
import FenetreCode from './FenetreCode.js';


export default function Creation(props) {
    const [fenetre, setFenetre] = React.useState(<FenetreCreation />);

    function isActive(onglet) {
        if ((onglet == "creation" && fenetre == <FenetreCreation />) || (onglet == "code") && fenetre == <FenetreCode />) {
            return "active";
        }
        return "";
    }

    return <div className="creation">
        <Onglet text="Création" active={isActive("creation")} action={() => setFenetre(<FenetreCreation />)} />
        <Onglet text="Code" active={isActive("code")} action={() => setFenetre(<FenetreCode />)} />

        {fenetre}

    </div>
}
