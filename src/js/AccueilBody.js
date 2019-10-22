import React, { Component } from 'react';
import '../css/AccueilBody.css';
class AccueilBody extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return  <div class="bodyAccueil">
      <h1>Kashyyyk</h1>
      <p>Créez des formulaires, des tableaux et des menus personnalisés</p>
      <p>Exportez vos propres données</p>
      <p>Une prise en main rapide et gratuite</p>
      //video de présentation réalisée plus tard
      <div>
        <div class="carte" id="carteForm">
          <h2>Créer un formulaire</h2>
        </div>
        <div class="carte" id="carteTableau">
          <h2>Créer un tableau</h2>
        </div>
        <div class="carte" id="carteMenu">
          <h2>Créer un menu</h2>
        </div>
      </div>
      <div>
        <h2>Vous voulez sauvegarder votre travail ?</h2>
        <p>Créez un compte pour découvrir cette fonctionnalité</p>
        <button>Créer un compte</button>
      </div>
    </div>

    }
}
export default AccueilBody;
