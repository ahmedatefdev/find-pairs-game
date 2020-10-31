import { call, delay, put, select } from "redux-saga/effects";
import { endGameWining, startGameWining } from "../actions/actions";
import {
  CARDS_ACTION_TYPES,
  Game_ACTION_TYPES,
  SCORE_ACTION_TYPES
} from "../types/ActionTypes";
import ICardData from "../types/ICardData";
import IState from "../types/IState";

function* getSelectedCards(selectedCard: ICardData) {
  const cardsData: ICardData[] = yield select(
    (state: IState) => state.cards.cardsData
  );
  const selectedPair = cardsData.find((card) => card.selected);
  selectedCard = cardsData.find((card) => card.order === selectedCard.order);
  return { cardsData, selectedPair, modifiedSelectedCard: selectedCard };
}

export default function* SelectPairs({
  payload: selectedCard
}: {
  type: string;
  payload: ICardData;
}) {
  const {
    cardsData,
    selectedPair,
    modifiedSelectedCard
  }: {
    cardsData: ICardData[];
    selectedPair: ICardData;
    modifiedSelectedCard: ICardData;
  } = yield getSelectedCards(selectedCard);

  modifiedSelectedCard.selected = true;
  yield put({
    type: CARDS_ACTION_TYPES.SET_CARDS_DATA,
    payload: [...cardsData]
  });
  if (!selectedPair) return;
  yield delay(1000);
  yield call(updateCardsData, selectedPair, modifiedSelectedCard, cardsData);
  if (!cardsData.some((card) => !card.hidden))
    yield put({ type: Game_ACTION_TYPES.GAME_FINISHED });
}

function* updateCardsData(
  selectedPair: any,
  modifiedSelectedCard: any,
  cardsData: any
) {
  checkPairs(selectedPair, modifiedSelectedCard);
  yield put({ type: SCORE_ACTION_TYPES.INCREMENT_TRIES });
  yield put({
    type: CARDS_ACTION_TYPES.SET_CARDS_DATA,
    payload: [...cardsData]
  });
}

function checkPairs(selectedPair: any, modifiedSelectedCard: any) {
  if (selectedPair.imgURL === modifiedSelectedCard.imgURL) {
    selectedPair.hidden = true;
    modifiedSelectedCard.hidden = true;
  }
  selectedPair.selected = false;
  modifiedSelectedCard.selected = false;
}
