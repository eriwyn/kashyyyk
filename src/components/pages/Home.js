import React from 'react';
import GhostButton from '../GhostButton.js';

import '../../css/pages/home.scss';

export default function Home (){
  return <main className="mainPage">
    <h1>Kashyyyk</h1>
    <div className="flexImageMenu">
      <article className="textCoteImageMenu">
        <p className="paragraphePresentationAccueil">Créez vos formulaires et tableaux</p>
        <p className="paragraphePresentationAccueil">Exportez le code HTML de vos créations</p>
        <p className="paragraphePresentationAccueil">Une prise en main rapide et gratuite</p>
      </article>
      <img src="dessin.jpg" alt="développement web"/>
    </div>
    <div className="divButton">
        <GhostButton lien="/creation-formulaire" text="Créer un formulaire"/>
        <GhostButton lien="creation-tableau" text="Créer un tableau"/>
    </div>
    <div className="divCompteAccueil">
      <h2 className="h2AccueilCompte">Vous voulez sauvegarder votre travail ?</h2>
      <p>Créez un compte pour découvrir cette fonctionnalité</p>
      <GhostButton lien="/connect" text="Créer un compte"/>
    </div>
  </main>
}
