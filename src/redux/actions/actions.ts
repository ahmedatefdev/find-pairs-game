import { CARDS_ACTION_TYPES, Game_ACTION_TYPES } from "../types/ActionTypes";
import getConfig from "next/config";
import IAction from "../types/IAction";

const { publicRuntimeConfig } = getConfig();

export const setCards = (): IAction => {
  return { type: CARDS_ACTION_TYPES.GENERATE_CARDS_DATA };
};

export const setCardsParies = (
  count: number = publicRuntimeConfig.defaultCardsCount
): IAction => {
  return { type: CARDS_ACTION_TYPES.SET_CARDS_PAIRS_COUNT, payload: count };
};

export const initialGame = (): IAction => ({
  type: Game_ACTION_TYPES.INITIAL_GAME
});

export const startGameWining = (): IAction => ({
  type: Game_ACTION_TYPES.START_GAME_WINNING
});

export const endGameWining = (): IAction => ({
  type: Game_ACTION_TYPES.END_GAME_WINNING
});
export const changeTheme = (): IAction => ({
  type: Game_ACTION_TYPES.TOGGLE_THEME
});
