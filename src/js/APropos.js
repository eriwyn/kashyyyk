import React, { Component } from 'react';
class APropos extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    return  <div >
      <h2>A Propos</h2>
      <div>
        <h2>Qui sommes nous?</h2>
        <p>Nous sommes un groupe de 3 étudiants en licence pro en mmi-développement web à l'IUT de Haguenau.</p>
        <img src="#"/>
      </div>
      <div>
        <h2>Notre projet</h2>
        <p>Dans le cadre de notre licence nous avions pour objectif de réaliser une application web accessible et responsive permettant
        facilement au plus grand nombre de personnes de créer des éléments courants d'une page web. La réalisation de cette application nous a permis de gagner en maturité pour ce qui est de la gestion
        d'un projet web de taille conséquente et nous aura égalemet permis de nous former à une nouvelle technologie: react.</p>
      </div>
    </div>

    }
}


export default APropos;
