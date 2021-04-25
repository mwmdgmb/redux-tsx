import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReduers from "./reducers";

const middlewares = [thunk, logger];

export const store = createStore(
  rootReduers,
  {},
  applyMiddleware(...middlewares)
);
