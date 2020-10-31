import { all, call, delay, put, takeLatest, select } from "redux-saga/effects";
import { CARDS_ACTION_TYPES, Game_ACTION_TYPES } from "../types/ActionTypes";
import getConfig from "next/config";
import IState from "../types/IState";
import { GenerateRandomCardsData } from "./Helper.saga";

const { publicRuntimeConfig } = getConfig();

function* ShowCards() {
  yield put({ type: Game_ACTION_TYPES.SHOW_CARDS });
  yield delay(publicRuntimeConfig.allCardReveal * 1000 || 5000);
  yield put({ type: Game_ACTION_TYPES.HIDE_CARDS });
}

export function* loadCardsData() {
  try {
    const pairsCount = yield select((state: IState) => state.cards.pairsCount);
    const cards = GenerateRandomCardsData(
      pairsCount || publicRuntimeConfig.defaultCardsCount
    );
    yield put({
      type: CARDS_ACTION_TYPES.SET_CARDS_DATA,
      payload: cards
    });
    yield call(ShowCards);
  } catch (err) {
    yield put({ type: Game_ACTION_TYPES.GAME_ERROR, payload: err });
    yield delay(2000);
    yield put({ type: Game_ACTION_TYPES.CLEAN_ERROR });
  }
}
