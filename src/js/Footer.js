import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){


    return  <footer>
      <nav>
          <ul>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">A propos</a></li>
          </ul>
      </nav>
    </footer>
    }
}
export default Footer;
