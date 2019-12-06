import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";
import '../css/Header.scss';
import Accueil from './Accueil.js';
export default function Header(){
    return <header>
      <nav>
          <ul>
            <li><img src="#"/></li>
            <li ><Link to="/" exact activeClassName="active">Accueil</Link></li>
            <li><a href="#" >Création formulaire</a></li>
            <li><a href="#" >Création menu</a></li>
            <li><a href="#" >Création tableau</a></li>
            <li><a href="#">Se connecter</a></li>
          </ul>
        </nav>
      </header>

    }
