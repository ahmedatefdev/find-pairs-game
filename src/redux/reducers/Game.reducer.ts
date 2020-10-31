import IAction from "../types/IAction";
import { Game_ACTION_TYPES } from "../types/ActionTypes";
import IGameState from "../types/IGameState";

const initialState: IGameState = {
  gameLoading: false,
  showCards: true,
  gameError: null,
  winGame: false,
  pairsOptionValues: []
};

export default function GameReducer(
  state: IGameState = initialState,
  { type, payload }: IAction
): IGameState {
  switch (type) {
    case Game_ACTION_TYPES.SHOW_CARDS:
      return { ...state, showCards: true };
    case Game_ACTION_TYPES.HIDE_CARDS:
      return { ...state, showCards: false };
    case Game_ACTION_TYPES.GAME_ERROR:
      return { ...state, gameError: payload };
    case Game_ACTION_TYPES.CLEAN_ERROR:
      return { ...state, gameError: null };
    case Game_ACTION_TYPES.START_GAME_WINNING:
      return { ...state, winGame: true };
    case Game_ACTION_TYPES.END_GAME_WINNING:
      return { ...state, winGame: false };
    case Game_ACTION_TYPES.SET_PAIRS_OPTIONS:
      return { ...state, pairsOptionValues: payload };
    default:
      return state;
  }
}
