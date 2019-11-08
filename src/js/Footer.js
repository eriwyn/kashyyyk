import React, { Component } from 'react';
import '../css/Footer.scss';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import MentionsLegales from './MentionsLegales.js';
import APropos from './APropos.js';
import App from './App.js';
class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){


    return <footer>
        <nav>
            <ul>
              <li><Link to="/MentionsLegales">Mentions légales</Link></li>
              <li><Link to="/APropos"> A propos</Link></li>
            </ul>
        </nav>
    </footer>

    }
}
export default Footer;
