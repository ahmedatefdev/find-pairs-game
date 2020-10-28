import { all, call, delay, put, takeLatest, select } from "redux-saga/effects";
import ICardData from "../types/ICardData";
import { GetCardsData } from "./helper.saga";
import { CARDS_ACTION_TYPES, Game_ACTION_TYPES } from "../types/ActionTypes";
import getConfig from "next/config";
import IState from "../types/IState";

const { publicRuntimeConfig } = getConfig();
const images = require.context("../../../public/images", false, /.jpg/);
const paths = images.keys();

function* GenerateRandomCardsData(cardsCount: number) {
  let tempPaths = [...paths];
  const orders = Array.from(Array(cardsCount * 2).keys());
  const RandomCardsData: ICardData[] = [];
  GetCardsData(cardsCount, tempPaths, orders, RandomCardsData);
  yield put({
    type: CARDS_ACTION_TYPES.SET_CARDS_DATA,
    payload: RandomCardsData
  });
}

function* ShowCards() {
  yield put({ type: Game_ACTION_TYPES.SHOW_CARDS });
  yield delay(1000);
  yield put({ type: Game_ACTION_TYPES.HIDE_CARDS });
}

export function* loadCardsData() {
  try {
    const pairsCount = yield select((state: IState) => state.cards.pairsCount);
    yield GenerateRandomCardsData(
      pairsCount | publicRuntimeConfig.defaultCardsCount
    );
    yield call(ShowCards);
  } catch (err) {
    yield put({ type: Game_ACTION_TYPES.GAME_ERROR, payload: err });
    yield delay(2000);
    yield put({ type: Game_ACTION_TYPES.CLEAN_ERROR });
  }
}

