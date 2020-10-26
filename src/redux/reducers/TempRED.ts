import { ORDER_ACTION_TYPES } from "../../../__TEMP__/redux/types/ActionTypes";
import IAction from "../types/IAction";
import IOrderState from "../../../__TEMP__/redux/types/IOrderState";

const initialState: IOrderState = {
  order: null,
  ordersData: { items: [], page: 0, pages: 0 },
  loading: false
};

// TODO : order Reducer
// ***  : when add new one to the database check for old one if active not
// ***  : add the new shipments t the old one
// ***  : Delete order
export default function TEMP(
  state: IOrderState = initialState,
  action: IAction
): IOrderState {
  switch (action.type) {
    case ORDER_ACTION_TYPES.LOADING:
      return { ...state, loading: true };
    case ORDER_ACTION_TYPES.STOP_LOADING:
      return { ...state, loading: false };
    case ORDER_ACTION_TYPES.SET_ORDER_ITEM:
      return { ...state, order: action.payload, loading: false };
    case ORDER_ACTION_TYPES.SET_ORDER_ITEMS_BY_PAGE:
      return { ...state, ordersData: action.payload, loading: false };
    case ORDER_ACTION_TYPES.CLEAN:
      return { ...initialState };
    default:
      return state;
  }
}
