import React from 'react';
import '../css/Accueil.scss';
import '../css/ghostButton.scss';
import GhostButton from './GhostButton.js';

export default function Accueil (){
    return <main className="mainPage">
      <h1>Kashyyyk</h1>
      <div className="flexImageMenu">
        <article className="textCoteImageMenu">
          <p className="paragraphePresentationAccueil">Créez vos formulaires et tableaux</p>
          <p className="paragraphePresentationAccueil">Exportez vos propres données</p>
          <p className="paragraphePresentationAccueil">Une prise en main rapide et gratuite</p>
        </article>
        <img src="dessin.jpg" alt="développement web"/>
      </div>
      <div className="divButton">
          <GhostButton lien="/formulaire" text="Créer un formulaire"/>
          <GhostButton lien="#" text="Créer un tableau"/>
      </div>
      <div className="divCompteAccueil">
        <h2 className="h2AccueilCompte">Vous voulez sauvegarder votre travail ?</h2>
        <p>Créez un compte pour découvrir cette fonctionnalité</p>
        <GhostButton lien="#" text="Créer un compte"/>
      </div>
    </main>

    }
