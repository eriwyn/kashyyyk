import React  from 'react';
import 'normalize.css'
import '../css/App.scss';
import Footer from './Footer.js';
import '../css/Footer.scss';
import Header from './Header.js';
import '../css/Header.scss';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Accueil from './Accueil.js';
import MentionsLegales from './MentionsLegales.js';
import APropos from './APropos.js';






export default function App(){
  return <div>
          <Header/>
            <Switch>
              <Route exact path="/" component={Accueil}/>
              <Route exact path="/Accueil" component={Accueil}/>
              <Route exact path="/MentionsLegales" component={MentionsLegales}/>
              <Route exact path="/APropos" component={APropos}/>
            </Switch>
          <Footer/>
        </div>
}
