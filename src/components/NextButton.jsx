import { useAppContext } from "../context/appContext";

const NextButton = () => {
  const { answer, index, questions, nextQuestion, finishQuiz } =
    useAppContext();

  const numQuestions = questions.length;

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className='btn btn-ui' onClick={nextQuestion}>
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button className='btn btn-ui' onClick={finishQuiz}>
        Finish
      </button>
    );
};

export default NextButton;
