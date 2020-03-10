import React   from 'react';
import {NavLink} from "react-router-dom";

import '../css/components/footer.scss';

export default function Footer() {

    return <footer>
        <nav>
            <ul>
              <li><NavLink to="/mentions-legales" activeClassName='active'>Mentions légales</NavLink></li>
              <li><NavLink to="/a-propos" activeClassName='active'>A propos</NavLink></li>
              <li><NavLink to="/faq" activeClassName='active'>FAQ</NavLink></li>
            </ul>
        </nav>
    </footer>

}
