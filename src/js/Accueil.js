import React, { Component } from 'react';
import Header from './Header.js'
import AccueilBody from './AccueilBody.js'
import Footer from './Footer.js'
import '../css/Accueil.css';

class Accueil extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return  <div className="page">
      <Header/>
      <AccueilBody/>
      <Footer/>
    </div>
    }
}
export default Accueil;

/*<AccueilBody/>
<div className="App-footer"><Footer/></div>-*/
