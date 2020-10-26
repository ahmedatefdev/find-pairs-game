import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore, combineReducers, applyMiddleware } from "redux";
import CreateReduxSaga from "redux-saga";
import IOrderState from "../../__TEMP__/redux/types/IOrderState";
import Temp from "./reducers/TempRED";
const reduxSaga = CreateReduxSaga();
const middleware = [reduxSaga];

const reducer = combineReducers({ Temp });

// export interface State {
//   tick: string;
// }

// const store = (initialState: any = {}) => {
//   return createStore(reducer, initialState, applyMiddleware(...middleware));
// };
const makeReduxStore: MakeStore<{ Temp: IOrderState }> = (context: Context) =>
  createStore(
    reducer,
    {
      Temp: {
        loading: false,
        order: {},
        ordersData: { items: [], page: 1, pages: 1 }
      }
    },
    applyMiddleware(...middleware)
  );
export const wrapper = createWrapper<{ Temp: IOrderState }>(makeReduxStore, {});
