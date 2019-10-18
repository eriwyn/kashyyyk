import React, { Component } from 'react';
import '../css/Header.css';
class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return <navbar>
          <ul>
            <li><img src="#"/></li>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Création formulaire</a></li>
            <li><a href="#">Création menu</a></li>
            <li><a href="#">Création tableau</a></li>
            <li><a href="#">Se connecter</a></li>
          </ul>
        </navbar>

    }
}
export default Header;
