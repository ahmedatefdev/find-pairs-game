import getConfig from "next/config";
import IAction from "../types/IAction";
import ICardsState from "../types/ICardsState";
import { CARDS_ACTION_TYPES } from "../types/ActionTypes";
const { publicRuntimeConfig } = getConfig();
const initialState: ICardsState = {
  pairsCount: publicRuntimeConfig.defaultCardsCount,
  cardsData: []
};

export default function CardReducer(
  state: ICardsState = initialState,
  action: IAction
): ICardsState {
  console.log("state", state);
  switch (action.type) {
    case CARDS_ACTION_TYPES.SET_CARDS_PAIRS_COUNT:
      return { ...state, pairsCount: action.payload };
    case CARDS_ACTION_TYPES.SET_CARDS_DATA:
      return { ...state, cardsData: action.payload };
    default:
      return state;
  }
}
