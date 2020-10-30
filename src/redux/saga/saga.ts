import { all, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { CARDS_ACTION_TYPES, Game_ACTION_TYPES } from "../types/ActionTypes";
import { loadCardsData } from "./GenerateCards.saga";
import SelectPairs from "./SelectCards.saga";
import WinGame from "./winGame.saga";

function* rootSaga() {
  yield all([
    takeLatest(CARDS_ACTION_TYPES.GENERATE_CARDS_DATA, loadCardsData),
    takeLeading(CARDS_ACTION_TYPES.SELECT_CARD_BY_ORDER, SelectPairs),
    takeLeading(Game_ACTION_TYPES.GAME_FINISHED, WinGame)
  ]);
}

export default rootSaga;
