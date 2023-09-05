/* eslint-disable react/prop-types */
import Option from "./Option";

const Question = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
