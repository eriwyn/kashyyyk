import React  from 'react';
import '../css/Footer.scss';
import {Link} from "react-router-dom";
import MentionsLegales from './MentionsLegales.js';
import APropos from './APropos.js';
import App from './App.js';


export default function Footer() {

    return <footer>
        <nav>
            <ul>
              <li><Link to="/MentionsLegales" activeClassName="active">Mentions légales</Link></li>
              <li><Link to="/APropos" activeClassName="active"> A propos</Link></li>
            </ul>
        </nav>
    </footer>

}
