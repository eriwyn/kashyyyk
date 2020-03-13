import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import '../../css/pages/connect.scss';

export default function Connect() {
    const [action, setAction] = useState("login");

    const Login = () => {
        const responseFacebook = (response) => {
            console.log(response);
        }
      
        const responseGoogle = (response) => {
            console.log(response);
        }
      
        return <div>
            <h1>Connexion</h1>
    
            <fieldset>              
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
                        <button type="button">Se connecter</button>
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
        </div>
    }

    const Register = () => {
        return <div>
                <h1>Inscription</h1>
                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="email">Email : </label>
                            <input type="email" name="email" id="email" placeholder="exemple@gmail.com" />
                        </li>
                        <li>
                            <label htmlFor="nom">Nom : </label>
                            <input type="text" name="nom" id="nom" placeholder="nom" />
                        </li>
                        <li>
                            <label htmlFor="prenom">Prénom : </label>
                            <input type="text" name="prenom" id="prenom" placeholder="prenom" />
                        </li>
                        <li>
                            <label htmlFor="mdp">Mot de passe : </label>
                            <input type="password" name="mdp" id="mdp" placeholder="•••••" />
                        </li>
                        <li>
                            <button type="button">S'inscrire</button>
                        </li>
                    </ul>
                </fieldset>
            </div>
    }
    
    return <main className="connectPage">
        <div>
            
            {(() => {
                switch (action) {
                    case "login":   return <div>
                        <button className="tab tab-active" onClick={() => setAction("login")}>Connexion</button>
                        <button className="tab" onClick={() => setAction("register")}>Inscription</button>
                        <Login />
                    </div>;
                    case "register": return <div>
                        <button className="tab" onClick={() => setAction("login")}>Connexion</button>
                        <button className="tab tab-active" onClick={() => setAction("register")}>Inscription</button>
                        <Register />
                        </div>;
                }
            })()}
        </div>
    </main>
}

