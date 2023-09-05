/* eslint-disable react/prop-types */
const Progress = ({ index, numQuestions, points, maxPoints, answer }) => {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + +(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
};

export default Progress;
