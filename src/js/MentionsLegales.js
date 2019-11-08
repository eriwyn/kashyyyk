import React, { Component } from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import MentionsLegalesBody from './MentionsLegalesBody.js'

class MentionsLegales extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return  <div className="page">
      <Header/>
      <MentionsLegalesBody/>
      <Footer/>
    </div>

    }
}
export default MentionsLegales;
