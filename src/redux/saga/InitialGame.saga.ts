import { call, delay, put } from "redux-saga/effects";
import getConfig from "next/config";
import { setCards } from "../actions/actions";
import { paths } from "./Helper.saga";
import { CARDS_ACTION_TYPES, Game_ACTION_TYPES } from "../types/ActionTypes";

const { publicRuntimeConfig } = getConfig();

function GetArrayOfParies(fullRowsCount: number, restOfFullRows: number) {
  const pairs: number[] = [];
  for (let i = 1; i <= (fullRowsCount || 0); i++)
    pairs.push(i * publicRuntimeConfig.cardsByRowCount);
  restOfFullRows &&
    pairs.push(
      (fullRowsCount || 0) * publicRuntimeConfig.cardsByRowCount + restOfFullRows
    );
  return pairs;
}

function* SetPairsOptions() {
  try {
    const fullRowsCount = Math.floor(
      paths.length / publicRuntimeConfig.cardsByRowCount
    );
    const restOfFullRows = paths.length % publicRuntimeConfig.cardsByRowCount;
    if (!fullRowsCount && !restOfFullRows)
      throw new Error("No valued Pairs to add");
    const pairs = GetArrayOfParies(fullRowsCount, restOfFullRows);
    yield put({ type: Game_ACTION_TYPES.SET_PAIRS_OPTIONS, payload: pairs });
    yield put({
      type: CARDS_ACTION_TYPES.SET_CARDS_PAIRS_COUNT,
      payload: pairs[0]
    });
  } catch (error) {
    yield put({ type: Game_ACTION_TYPES.GAME_ERROR, payload: error });
    yield delay(2000);
    yield put({ type: Game_ACTION_TYPES.CLEAN_ERROR });
  }
}

const InitialGame = function* () {
  yield call(SetPairsOptions);
  yield put(setCards());
};
export default InitialGame;
