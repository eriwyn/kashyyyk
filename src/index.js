import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import * as serviceWorker from './js/serviceWorker';
import App from "./js/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
  
    return promiseInProgress && 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
       }}
      >
        <Loader type="ThreeDots" color="#2BAD60" />
     </div>
};
  

ReactDOM.render(<BrowserRouter><Provider store={store}><App /><LoadingIndicator/></Provider></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
