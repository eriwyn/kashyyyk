import React   from 'react';
import '../css/Footer.scss';
import {NavLink} from "react-router-dom";
import MentionsLegales from './MentionsLegales.js';
import APropos from './APropos.js';
import App from './App.js';


export default function Footer() {

    return <footer>
        <nav>
            <ul>
              <li><NavLink to="/MentionsLegales" activeClassName='active'>Mentions légales</NavLink></li>
              <li><NavLink to="/APropos" activeClassName='active'> A propos</NavLink></li>
              <li><NavLink to="/faq" activeClassName='active'> FAQ</NavLink></li>
            </ul>
        </nav>
    </footer>

}
