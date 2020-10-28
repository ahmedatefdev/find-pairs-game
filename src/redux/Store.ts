import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore, combineReducers, applyMiddleware } from "redux";
import CreateReduxSaga from "redux-saga";
import CardReducer from "./reducers/Cards.reducer";
import rootReducer from "./reducers/root.reducers";
import rootSaga from "./saga/saga";
import IState from "./types/IState";

const reduxSaga = CreateReduxSaga();
const middleware = [reduxSaga];
function makeReduxStore(context: Context) {
  const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
  // TODO: take all the saga funcs and add it to the run
  (store as any).sagaTask = reduxSaga.run(rootSaga);
  return store;
}

export const wrapper = createWrapper<IState>(makeReduxStore);
