import { put } from "redux-saga/effects";
import { setCards } from "../actions/actions";
import { Game_ACTION_TYPES } from "../types/ActionTypes";

const ResetGame = function* () {
  yield put({ type: Game_ACTION_TYPES.RESET_GAME });
  yield put(setCards());
};
export default ResetGame;
