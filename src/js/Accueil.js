import React, { Component } from 'react';
import '../css/Accueil.scss';
import '../css/ghostButton.scss';
import GhostButton from './GhostButton.js';

export default function Accueil (){
    return <main className="mainPage">
      <h1>Kashyyyk</h1>
        <p className="paragraphePresentationAccueil">Créez vos formulaires, tableaux et menus</p>
        <p className="paragraphePresentationAccueil">Exportez vos propres données</p>
        <p className="paragraphePresentationAccueil">Une prise en main rapide et gratuite</p>
      <div className="divButton">
          <GhostButton text="Créer un formulaire"/>
          <GhostButton text="Créer un tableau"/>
          <GhostButton text="Créer un menu"/>
      </div>
      <div className="divCompteAccueil">
        <h2 className="h2AccueilCompte">Vous voulez sauvegarder votre travail ?</h2>
        <p>Créez un compte pour découvrir cette fonctionnalité</p>
        <GhostButton text="Créer un compte"/>
      </div>
    </main>

    }
