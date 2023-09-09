/* eslint-disable no-case-declarations */
const SEC_PER_QUESTION = 30;

import {
  DATA_RECEIVED,
  DATA_FAILED,
  START_QUIZ,
  NEW_ANSWER,
  FINISH_QUIZ,
  NEXT_QUESTION,
  RESTART_QUIZ,
  TIME_CHECK,
} from "./action";
import { initialState } from "./appContext";

function reducer(state, action) {
  switch ((state, action.type)) {
    case DATA_RECEIVED:
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case DATA_FAILED:
      return { ...state, status: "error" };
    case START_QUIZ:
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };
    case NEW_ANSWER:
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case NEXT_QUESTION:
      return { ...state, index: state.index + 1, answer: null };
    case FINISH_QUIZ:
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case RESTART_QUIZ:
      return {
        ...initialState,
        highscore: state.highscore,
        questions: state.questions,
        status: "ready",
      };
    case TIME_CHECK:
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

export default reducer;
