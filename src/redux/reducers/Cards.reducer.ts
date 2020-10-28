import IAction from "../types/IAction";
import ICardsState from "../types/ICardsState";
import { CARDS_ACTION_TYPES } from "../types/ActionTypes";
import ICardData from "../types/ICardData";

const initialState: ICardsState = {
  pairsCount: 10,
  cardsData: []
};

export default function CardReducer(
  state: ICardsState = initialState,
  action: IAction
): ICardsState {
  switch (action.type) {
    case CARDS_ACTION_TYPES.SET_CARDS_PAIRS_COUNT:
      return { ...state, pairsCount: action.payload };
    case CARDS_ACTION_TYPES.SET_CARDS_DATA:
      return { ...state, cardsData: action.payload };
    default:
      return state;
  }
}
