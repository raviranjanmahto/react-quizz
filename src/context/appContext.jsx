/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

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

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: DATA_RECEIVED, payload: data }))
      .catch(() => dispatch({ type: DATA_FAILED }));
  }, []);

  // useEffect(function () {
  //   fetch("../data/questions.json")
  //     .then(res => res.json())
  //     .then(data => dispatch({ type: DATA_RECEIVED, payload: data.questions }))
  //     .catch(() => dispatch({ type: DATA_FAILED }));
  // }, []);

  const start = () => dispatch({ type: START_QUIZ });
  const newAnswer = index => dispatch({ type: NEW_ANSWER, payload: index });
  const timeCheck = () => dispatch({ type: TIME_CHECK });
  const nextQuestion = () => dispatch({ type: NEXT_QUESTION });
  const finishQuiz = () => dispatch({ type: FINISH_QUIZ });
  const restartQuiz = () => dispatch({ type: RESTART_QUIZ });

  return (
    <AppContext.Provider
      value={{
        ...state,
        start,
        newAnswer,
        restartQuiz,
        timeCheck,
        nextQuestion,
        finishQuiz,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
