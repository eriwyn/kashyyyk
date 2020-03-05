import React  from 'react';
import '../../../css/Creation.scss';
import Onglet from './Onglet.js';
import FenetreCreation from './FenetreCreation.js';
import FenetreCode from './FenetreCode.js';


export default function Creation(props) {
    const [fenetre, setFenetre] = React.useState(<FenetreCreation type={props.type} />);

    function isActive(onglet) {
        if ((onglet == "creation" && fenetre == <FenetreCreation type={props.type} />) || (onglet == "code") && fenetre == <FenetreCode type={props.type} />) {
            return "active";
        }
        return "";
    }

    return <div className="creation">
        <Onglet text="Création" active={isActive("creation")} action={() => setFenetre(<FenetreCreation type={props.type} />)} />
        <Onglet text="Code" active={isActive("code")} action={() => setFenetre(<FenetreCode />)} />

        {fenetre}

    </div>
}
