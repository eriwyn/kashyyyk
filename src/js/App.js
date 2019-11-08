import React, { Component } from 'react';
import 'normalize.css'
import '../css/App.scss';
import Footer from './Footer.js';
import '../css/Footer.scss';
import Header from './Header.js';
import '../css/Header.scss';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";



export default function App({component:MatchedPage, ...rest}){
  return (
    <Route {...rest} render={matchProps=>(
        <div>
          <Header/>
          <MatchedPage {...matchProps} />
          <Footer/>
        </div>
      )}
      />

  )
}
