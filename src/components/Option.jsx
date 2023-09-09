import { useAppContext } from "../context/appContext";

const Option = () => {
  const { questions, answer, index, newAnswer } = useAppContext();
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {questions[index].options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => newAnswer(i)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Option;
