import React, { Component } from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import AProposBody from './AProposBody.js'

class APropos extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return  <div className="page">
      <Header/>
      <AProposBody/>
      <Footer/>
    </div>

    }
}
export default APropos;
