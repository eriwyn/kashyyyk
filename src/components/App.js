import React  from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import Footer from './Footer.js';
import Header from './Header.js';
import Home from './pages/Home.js';
import CreateForm from './pages/CreateForm.js';
import CreateTable from './pages/CreateTable.js';
import MyCreations from './pages/MyCreations.js';
import Connect from './pages/Connect.js';
import Legal from './pages/Legal.js';
import About from './pages/About.js';
import Faq from './pages/Faq.js';


import '../css/App.scss';

// import MesCreations from './components/MesCreations';

export default function App(){
  return <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/creation-formulaire" component={CreateForm}/>
      <Route exact path="/creation-tableau" component={CreateTable}/>
      <Route exact path="/mes-creations" component={MyCreations}/>
      <Route exact path="/connect" component={Connect}/>
      <Route exact path="/mentions-legales" component={Legal}/>
      <Route exact path="/a-propos" component={About}/>
      <Route exact path="/faq" component={Faq}/>
    </Switch>
    <Footer/>
  </div>
}
