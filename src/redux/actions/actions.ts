import IAction from "../../../__TEMP__/redux/types/IAction";
import { CARDS_ACTION_TYPES } from "../types/ActionTypes";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const setCards = (): IAction => {
  return { type: CARDS_ACTION_TYPES.GENERATE_CARDS_DATA };
};

export const setCardsParies = (
  count: number = publicRuntimeConfig.defaultCardsCount
): IAction => {
  return { type: CARDS_ACTION_TYPES.SET_CARDS_PAIRS_COUNT, payload: count };
};
