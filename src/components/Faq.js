import React  , {useState, useEffect } from 'react';
import './../../css/PagesFooter.scss'


export default function Faq(props){

    return <main>
        <h1>Foire aux questions</h1>
        <ul className="articles">
            <li className="article">
                <article>
                    <h3>Quel est le but de Kashyyyk ?</h3>
                    <p>Kashyyk est une application web permettant de générer le code html de différents éléments courants d'une page web: les tableaux
                        et les formulaires. L'ensemble de l'application ainsi que le code généré a pour but d'être accessible.
                    </p>
                </article>
            </li>
            <li className="article">
                <article>
                    <h3>Pourquoi mettre l'accent sur l'accessibilité ?</h3>
                    <p>L'accessibilité est le fait de mettre à disposition un contenu numérique quel que soit le matériel ou logiciel, l' infrastructure réseau, la langue maternelle,
                        la culture, la localisation géographique, ou les aptitudes physiques ou mentales de l'utilisateur.</p>
                    <p>Afin de rendre notre application utilisable par le plus grand nombre de personne possible, sans distinction nous avons choisi de rendre celle-ci le plus accessible possible.</p>
                    <p>Dans les faits, nous avons veillés à la qualité des contrastes, aux choix de nos couleurs, avons mis en place une navigation via le clavier
                        et avons adapté notre code pour que celui ci permette à un narrateur d'écran de correctement décrire nos pages web.
                    </p>
                </article>
            </li>
            <li className="article">
                <article>
                    <h3>Est il nécessaire de créer un compte pour utiliser Kashyyyk?</h3>
                    <p>Non. Créer un compte offre seulement la possibilité à l'utilisateur de venir sauveagrder et éditer ses créations. Sans compte l'utilisateur peut
                        uniquement créer des tableaux et des formulaires mais ne pourra pas bénéficier des avantages cités précédement. 
                    </p>
                </article>
            </li>
            <li className="article">
                <article>
                    <h3>Mes créations et mes données personnelles restent ils privés?</h3>
                    <p>Oui. Vos créations sont uniquement récupérables par vous. Ils ne sont en aucun cas partagés ou rendu publics.</p>
                    <p>Il en va de même de vos données personnelles utilisées lors de la création d'un compte. Elles ne sont jamais divulguées ni réutilisées autre part que pour créer un compte et vous maintenir connecté sur Kashyyyk.</p>
                </article>
            </li>
            <li className="article">
                <article>
                    <h3>Votre site utilise t'il des cookies?</h3>
                    <p>Bien que nous apprécions les manger :p nous n'utilisons aucun cookies sur Kashyyyk.</p>
                </article>
            </li>
            <li className="article">
                <article>
                    <h3>Pourquoi utiliser votre générateur Html plutôt qu'un autre?</h3>
                    <p>Tout d'abord notre application se veut accessible contrairement à beaucoup d'autres applications.</p>
                    <p>De plus Kashyyyk est totalement gratuit et cherche au maximum à rendre son utilisation confortable pour chaque utilisateur.
                        Nous avons mis en place une interface simple et facile d'utilisation avec un système de glisser/déposer afin d'améliorer votre expérience de création.
                    </p>
                </article>
            </li>
        </ul>
    </main>
}