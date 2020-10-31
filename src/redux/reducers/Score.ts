import { Game_ACTION_TYPES, SCORE_ACTION_TYPES } from "../types/ActionTypes";
import { createSelector } from "reselect";
import IAction from "../types/IAction";
import IScoreState from "../types/IScoreState";
import IState from "../types/IState";

const initialState: IScoreState = {
  tries: 0
};
const selectCardsData = (state: IState) => state.cards.cardsData;

export const selectScore = createSelector([selectCardsData], (cards) => {
  const hiddenCardsCount = cards.reduce(
    (val, card) => (card.hidden ? val + 1 : val),
    0
  );
  return hiddenCardsCount ? hiddenCardsCount / 2 : hiddenCardsCount;
});

export const selectCurrentPairsCount = createSelector(
  [selectCardsData],
  (cards) => cards.length / 2
);

export default function ScoreReducer(
  state: IScoreState = initialState,
  action: IAction
): IScoreState {
  
  switch (action.type) {
    case SCORE_ACTION_TYPES.INCREMENT_TRIES:
      return { ...state, tries: state.tries + 1 };
    case Game_ACTION_TYPES.RESET_GAME:
      return { ...initialState };
    default:
      return state;
  }
}
