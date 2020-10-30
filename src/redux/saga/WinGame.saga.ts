import { call, delay, put } from "redux-saga/effects";
import { endGameWining, startGameWining } from "../actions/actions";
import getConfig from "next/config";
import ResetGame from "./ResetGame.saga";

const { publicRuntimeConfig } = getConfig();
const animationTime = publicRuntimeConfig.restTimeAfterWin;
const WinGame = function* () {
  yield put(startGameWining());
  yield delay(animationTime * 1000);
  yield put(endGameWining());
  yield call(ResetGame);
};
export default WinGame;
