import IAction from "../types/IAction";
import { Game_ACTION_TYPES } from "../types/ActionTypes";
import IGameState from "../types/IGameState";

const initialState: IGameState = {
  gameLoading: false,
  showCards: true,
  gameError: null
};

export default function GameReducer(
  state: IGameState = initialState,
  action: IAction
): IGameState {
  switch (action.type) {
    case Game_ACTION_TYPES.LOADING:
      return { ...state, gameLoading: true };
    case Game_ACTION_TYPES.STOP_LOADING:
      return { ...state, gameLoading: false };
    case Game_ACTION_TYPES.SHOW_CARDS:
      return { ...state, showCards: true };
    case Game_ACTION_TYPES.HIDE_CARDS:
      return { ...state, showCards: false };
    case Game_ACTION_TYPES.GAME_ERROR:
      return { ...state, gameError: action.payload };
    case Game_ACTION_TYPES.CLEAN_ERROR:
      return { ...state, gameError: null };
    default:
      return state;
  }
}
