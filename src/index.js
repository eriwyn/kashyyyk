import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import * as serviceWorker from './js/serviceWorker';
import App from "./js/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";


ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
