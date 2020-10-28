import { all, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { CARDS_ACTION_TYPES } from "../types/ActionTypes";
import { loadCardsData } from "./GenerateCards.saga";
import SelectPairs from "./SelectCards.saga";

function* rootSaga() {
  yield all([
    takeLatest(CARDS_ACTION_TYPES.GENERATE_CARDS_DATA, loadCardsData),
    takeLeading(CARDS_ACTION_TYPES.SELECT_CARD_BY_ORDER, SelectPairs)
  ]);
}

export default rootSaga;
