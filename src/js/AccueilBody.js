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
      <div className="divButton">
          <a href="#" className="buttonAccueil" id="buttonForm"><h2>Créer un formulaire</h2></a>
          <a href="#" className="buttonAccueil" id="buttonTableau"><h2>Créer un tableau</h2></a>
          <a href="#" className="buttonAccueil" id="buttonMenu"><h2>Créer un menu</h2></a>
      </div>
      <div className="divFlexCenter">
        <h2 className="h2AccueilCompte">Vous voulez sauvegarder votre travail ?</h2>
        <p>Créez un compte pour découvrir cette fonctionnalité</p>
        <a href="#" className="buttonAccueil"><h2>Créer un compte</h2></a>
      </div>
    </main>

    }
}
export default AccueilBody;
