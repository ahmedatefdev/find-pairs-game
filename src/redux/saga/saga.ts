import { all, takeLatest, takeLeading } from "redux-saga/effects";
import { CARDS_ACTION_TYPES, Game_ACTION_TYPES } from "../types/ActionTypes";
import { loadCardsData } from "./GenerateCards";
import InitialGame from "./InitialGame";
import RestartGameByOption from "./ResetGame";
import SelectPairs from "./SelectCards";
import WinGame from "./WinGame";

function* rootSaga() {
  yield all([
    takeLatest(CARDS_ACTION_TYPES.GENERATE_CARDS_DATA, loadCardsData),
    takeLeading(CARDS_ACTION_TYPES.SELECT_CARD_BY_ORDER, SelectPairs),
    takeLeading(Game_ACTION_TYPES.GAME_FINISHED, WinGame),
    takeLeading(Game_ACTION_TYPES.RESTART_GAME_BY_OPTION, RestartGameByOption),
    takeLeading(Game_ACTION_TYPES.INITIAL_GAME, InitialGame)
  ]);
}

export default rootSaga;
