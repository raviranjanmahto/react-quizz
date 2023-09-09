import { useAppContext } from "../context/appContext";

const FinishScreen = () => {
  const { points, highscore, questions, restartQuiz } = useAppContext();
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className='result'>
        <span>{emoji}</span> You score <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
      <button className='btn btn-ui' onClick={restartQuiz}>
        Restart quiz
      </button>
    </>
  );
};

export default FinishScreen;
