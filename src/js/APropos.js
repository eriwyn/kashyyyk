import React, { Component } from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import MentionsLegalesBody from './MentionsLegalesBody.js'

class APropos extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return  <div className="page">
      <div className="App-header"><Header/></div>
      <AProposBody/>
      <div className="App-footer"><Footer/></div>
    </div>

    }
}
export default APropos;
