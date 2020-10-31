import { call, put } from "redux-saga/effects";
import { setCards } from "../actions/actions";
import { CARDS_ACTION_TYPES, Game_ACTION_TYPES } from "../types/ActionTypes";

export const ResetGame = function* () {
  yield put({ type: Game_ACTION_TYPES.RESET_GAME });
  yield put(setCards());
};
export default function* RestartGameByOption({
  payload
}: {
  type: string;
  payload: number;
}) {
  yield put({
    type: CARDS_ACTION_TYPES.SET_CARDS_PAIRS_COUNT,
    payload: payload
  });
  yield call(ResetGame);
}
