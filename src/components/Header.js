import React from 'react';
import { connect } from "react-redux";
import {NavLink,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/components/header.scss';

function Header(props){
  const ConnectionButton = () => {
    //A Faire
    // const changementEtatCo=(event)=>{
    //   event.preventDefault();
    //   props.connectUser(784);
    // }

    // if(props.connectedUser){
    //   return <a href="#">Se Déconnecter</a>
    // }
    // else{
    //   return <a onClick={changementEtatCo} href="#">Se Connecter</a>
    // }
    

    return <NavLink to="/connect"  activeClassName="active">Se connecter</NavLink>
  }
  
  function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }

  return <header className="Navbar">
    <Link to="/home" className="Navbar__Link logo"><img src="logo.svg" id="logo" alt="Kashyyyk" /></Link>
    <FontAwesomeIcon icon={faBars} className="Navbar__Link Navbar__Link-toggle" onClick={classToggle} size="2x"/>
    <nav className="Navbar__Items">
      <ul>
        <li><NavLink to="/home"  activeClassName='active'>Accueil</NavLink></li>
        <li><NavLink to="/creation-formulaire"  activeClassName="active">Créer un formulaire</NavLink></li>
        <li><NavLink to="/creation-tableau" activeClassName="active">Créer un tableau</NavLink></li>
        <li><NavLink to="/mes-creations"  activeClassName="active">Mes créations</NavLink></li>
        <li><ConnectionButton /></li>
      </ul>
    </nav>
  </header>
}

const mapStateToProps = reduxState => {
  return {
      connectedUser: reduxState.ConnexionReducer
    }
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);    