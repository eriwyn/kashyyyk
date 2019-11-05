import React, { Component } from 'react';
import '../css/AccueilBody.scss';
class AccueilBody extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return  <main>
      <h1>Kashyyyk</h1>
      <div className="PhrasesAccroches">
        <p className="paragraphePresentationAccueil">Créez des formulaires, des tableaux et des menus personnalisés</p>
        <p className="paragraphePresentationAccueil">Exportez vos propres données</p>
        <p className="paragraphePresentationAccueil">Une prise en main rapide et gratuite</p>
      </div>
      <div className="divCarte">
        <div className="carte" id="carteForm">
          <h2>Créer un formulaire</h2>
        </div>
        <div className="carte" id="carteTableau">
          <h2>Créer un tableau</h2>
        </div>
        <div className="carte" id="carteMenu">
          <h2>Créer un menu</h2>
        </div>
      </div>
      <div>
        <h2>Vous voulez sauvegarder votre travail ?</h2>
        <p>Créez un compte pour découvrir cette fonctionnalité</p>
        <button>Créer un compte</button>
      </div>
    </main>

    }
}
export default AccueilBody;
