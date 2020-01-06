import React from 'react';
import {NavLink} from "react-router-dom";
import '../css/Header.scss';
import Accueil from './Accueil.js';
export default function Header(){

    return <header>
      <nav>
          <ul>
            <li><img src="#"/></li>
            <li><NavLink to="/Accueil"  activeClassName='active'>Accueil</NavLink></li>
            <li><NavLink to="/formulaire"  activeClassName="active">Création formulaire</NavLink></li>
            <li><a href="#" >Création menu</a></li>
            <li><a href="#" >Création tableau</a></li>
            <li><a href="#">Se connecter</a></li>
          </ul>
        </nav>
      </header>

    }
