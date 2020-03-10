import React from 'react';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';
// import Singup from './components/Singup';
// import Login from './components/Login';
// import PageProjets from './components/PageProjets';

import '../../css/pages/connect.scss';

export default function Connect() {
    const responseFacebook = (response) => {
        console.log(response);
    }
  
    const responseGoogle = (response) => {
        console.log(response);
    }
  
    return <main className="mainPage">
        <h1>Connexion</h1>

        <fieldset>
            <legend>Informations :</legend>
            
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" id="email" placeholder="exemple@gmail.com" />

            <label htmlFor="mdp">Mot de passe : </label>
            <input type="password" name="mdp" id="mdp" placeholder="•••••" />

            <button type="button">Enregistrer</button>
        </fieldset>

        <FacebookLogin
          appId="485861328636281"
          fields="name,email,picture"
          callback={responseFacebook}
          textButton="Connexion avec Facebook"
        />

        <GoogleLogin
          clientId="217725423705-au5n448v5vhc4qr47aelmam95r1ceicq.apps.googleusercontent.com"
          buttonText="Connexion avec Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
    </main>
}
