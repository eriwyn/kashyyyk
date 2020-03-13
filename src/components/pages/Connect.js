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
    
            <fieldset >              
                <ul>
                    <li>
                        <label htmlFor="email">Email : </label>
                        <input type="email" name="email" id="email" placeholder="exemple@gmail.com" className="belInput"/>
                    </li>
                    <li>
                        <label htmlFor="mdp">Mot de passe : </label>
                        <input type="password" name="mdp" id="mdp" placeholder="•••••" className="belInput"/>
                    </li>
                    <li>
                        <button type="button">Se connecter</button>
                    </li>

                    <li><FacebookLogin
                    appId="1232819600261251"
                    fields="name,email,picture"
                    callback={responseFacebook}
                    textButton="Connexion avec Facebook"
                    /></li>
            
                    <li><GoogleLogin
                    clientId="996141723746-lcqadl32f7rt2f2a728qm1m6ccm7llqo.apps.googleusercontent.com"
                    buttonText="Connexion avec Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    /></li>

                </ul>
            </fieldset>
                
        </div>
    }

    const Register = () => {
        return <div>
                <h1>Inscription</h1>
                <fieldset >
                    <ul>
                        <li>
                            <label htmlFor="email">Email : </label>
                            <input type="email" name="email" id="email" placeholder="exemple@gmail.com" className="belInput"/>
                        </li>
                        <li>
                            <label htmlFor="nom">Nom : </label>
                            <input type="text" name="nom" id="nom" placeholder="nom" className="belInput"/>
                        </li>
                        <li>
                            <label htmlFor="prenom">Prénom : </label>
                            <input type="text" name="prenom" id="prenom" placeholder="prenom" className="belInput"/>
                        </li>
                        <li>
                            <label htmlFor="mdp">Mot de passe : </label>
                            <input type="password" name="mdp" id="mdp" placeholder="•••••" className="belInput"/>
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

