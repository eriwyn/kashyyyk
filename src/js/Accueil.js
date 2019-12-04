import React, { Component } from 'react';
import '../css/Accueil.scss';
import '../css/button.scss';
class Accueil extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return  <main className="mainPage">
      <h1>Kashyyyk</h1>
        <p className="paragraphePresentationAccueil">Créez vos formulaires , tableaux et menus</p>
        <p className="paragraphePresentationAccueil">Exportez vos propres données</p>
        <p className="paragraphePresentationAccueil">Une prise en main rapide et gratuite</p>
      <div className="divButton">
          <a href="#" className="ghostButton" id="buttonForm">Créer un formulaire</a>
          <a href="#" className="ghostButton" id="buttonTableau">Créer un tableau</a>
          <a href="#" className="ghostButton" id="buttonMenu">Créer un menu</a>
      </div>
      <div className="divCompteAccueil">
        <h2 className="h2AccueilCompte">Vous voulez sauvegarder votre travail ?</h2>
        <p>Créez un compte pour découvrir cette fonctionnalité</p>
        <a href="#" className="ghostButton">Créer un compte</a>
      </div>
    </main>

    }
}
export default Accueil;
