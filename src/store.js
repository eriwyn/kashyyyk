import logger from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";

import reducers from "./reducers";

// on créé un store de données
const store = createStore(
  // on enregistre les reducers
  combineReducers(reducers),
  undefined,
  // on applique le middleware de logging
  applyMiddleware(logger)
);

export { store };
