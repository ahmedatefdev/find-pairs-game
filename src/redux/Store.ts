import { createStore, combineReducers, applyMiddleware } from "redux";
import CreateReduxSaga from "redux-saga";
const reduxSaga = CreateReduxSaga();
const middleware = [reduxSaga];

const reducer = combineReducers({});

const store = (initialState: any = {}) => {
  return createStore(reducer, initialState, applyMiddleware(...middleware));
};

export default store;
