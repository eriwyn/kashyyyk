import React ,{useState} from 'react';
import { connect } from "react-redux";
import {NavLink,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/Header.scss';
import Accueil from './Accueil.js';

function Header(props){
  function ConnexionButton(props){

    const changementEtatCo=(event)=>{
      event.preventDefault();
      console.log('wesh')
      props.connectUser(784);
    }

    if(props.connectedUser){
      return <a href="#">Se Déconnecter</a>
    }
    else{
      return <a onClick={changementEtatCo} href="#">Se Connecter</a>
    }
  }
  function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }

  return <header className="Navbar">
      <Link to="/Accueil" className="Navbar__Link logo"><img src="logo.svg" id="logo"/></Link>
      <FontAwesomeIcon icon={faBars} className="Navbar__Link Navbar__Link-toggle" onClick={classToggle} size="2x"/>
    <nav className="Navbar__Items">
        <ul>
          <li><NavLink to="/Accueil"  activeClassName='active'>Accueil</NavLink></li>
          <li><NavLink to="/formulaire"  activeClassName="active">Création formulaire</NavLink></li>
          <li><a href="#">Création tableau</a></li>
          <li><NavLink to="/mesCreations"  activeClassName="active">Mes créations</NavLink></li>
          <li><ConnexionButton /></li>
        </ul>
    </nav>
    </header>

}

const mapDispatchToProps = dispatch => {
  return {
    deconnexion:  ()=> {
      dispatch({ type: "DECONNEXION"});
    },
    connectUser:userId=>{
      dispatch({type:"CONNEXION",data:{userId}})
    }
  };
};

const mapStateToProps = reduxState => {
  return {
      connectedUser: reduxState.ConnexionReducer
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);    