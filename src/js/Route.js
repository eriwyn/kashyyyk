import React from 'react';
import 'normalize.css';
import {BrowserRouter as Router} from "react-router-dom";
import Accueil from './Accueil.js';
import MentionsLegales from './MentionsLegales.js';
import APropos from './APropos.js';
import App from './App.js';

export default function Route (){

    return <Router>
      <div>
        <App exact path="/" component={Accueil}/>
        <App exact path="/MentionsLegales" component={MentionsLegales}/>
        <App exact path="/APropos" component={APropos}/>
      </div>
    </Router>
}
