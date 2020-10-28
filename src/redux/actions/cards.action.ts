import IAction from "../../../__TEMP__/redux/types/IAction";
import { CARDS_ACTION_TYPES } from "../types/ActionTypes";
import ICardData from "../types/ICardData";

export const selectCardByOrder = (cardData: ICardData): IAction => {
  return { type: CARDS_ACTION_TYPES.SELECT_CARD_BY_ORDER, payload: cardData };
};
export const deselectCards = (): IAction => {
  return { type: CARDS_ACTION_TYPES.DESELECT_CARDS };
};
