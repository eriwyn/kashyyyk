import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./store";
import './css/index.scss';
import * as serviceWorker from './js/serviceWorker';
import App from "./js/App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();
