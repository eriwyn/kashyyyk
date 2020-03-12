import React from 'react';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';
// import Singup from './components/Singup';
// import Login from './components/Login';
// import PageProjets from './components/PageProjets';

import '../../css/pages/connect.scss';

export default function Connect() {
    const Login = () => {
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
                
                <ul>
                    <li>
                        <label htmlFor="email">Email : </label>
                        <input type="email" name="email" id="email" placeholder="exemple@gmail.com" />
                    </li>
                    <li>
                        <label htmlFor="mdp">Mot de passe : </label>
                        <input type="password" name="mdp" id="mdp" placeholder="•••••" />
                    </li>
                    <li>
                        <button type="button">Enregistrer</button>
                    </li>
                </ul>
            </fieldset>
    
            <FacebookLogin
              appId="1232819600261251"
              fields="name,email,picture"
              callback={responseFacebook}
              textButton="Connexion avec Facebook"
            />
    
            <GoogleLogin
              clientId="996141723746-ak7frmnjnt3ul7e6blabl6ir7s0d9b5h.apps.googleusercontent.com"
              buttonText="Connexion avec Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              theme="dark"
            />
        </main>
    }

    const Register = () => {
        return <main className="mainPage">
                <h1>Inscription</h1>
                <fieldset>
                    <legend>Coordonnées :</legend>
                    <ul>
                        <li>
                            <label for="email">Email : </label>
                            <input type="email" name="email" id="email" placeholder="exemple@gmail.com" />
                        </li>
                        <li>
                            <label for="nom">Nom : </label>
                            <input type="text" name="nom" id="nom" placeholder="nom" />
                        </li>
                        <li>
                            <label for="prenom">Prénom : </label>
                            <input type="text" name="prenom" id="prenom" placeholder="prenom" />
                        </li>
                        <li>
                            <label for="mdp">Mot de passe : </label>
                            <input type="password" name="mdp" id="mdp" placeholder="•••••" />
                        </li>
                        <li>
                            <button type="button">Enregistrer</button>
                        </li>
                    </ul>
                </fieldset>
            </main>
    }
    
    return <Login />
}

