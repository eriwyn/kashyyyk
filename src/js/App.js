import React from 'react';
import 'normalize.css'
import '../css/App.scss';
import Accueil from './Accueil.js'
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
import MentionsLegales from './MentionsLegales.js';
import APropos from './APropos.js';

function App() {
      return<Router >
        <Switch>
          <Route path='/Accueil' component={Accueil}></Route>
          <Route path='/MentionsLegales' component={MentionsLegales}></Route>
          <Route path='/APropos' component={APropos}></Route>
        </Switch>
      </Router>

  }

export default App;
