import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import '../css/Header.scss';
import Accueil from './Accueil.js';
class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return <header>
      <nav>
          <ul>
            <li><img src="#"/></li>
            <li><Link to="/">Accueil</Link></li>
            <li><a href="#">Création formulaire</a></li>
            <li><a href="#">Création menu</a></li>
            <li><a href="#">Création tableau</a></li>
            <li><a href="#">Se connecter</a></li>
          </ul>
        </nav>
      </header>

    }
}
export default Header;
