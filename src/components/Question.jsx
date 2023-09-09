import { useAppContext } from "../context/appContext";
import Option from "./Option";

const Question = () => {
  const { questions, index } = useAppContext();

  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Option />
    </div>
  );
};

export default Question;
