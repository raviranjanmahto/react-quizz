import { useAppContext } from "../context/appContext";

const StartScreen = () => {
  const { start, numQuestions } = useAppContext();

  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} Questions to test your React mastery</h3>
      <button className='btn btn-ui' onClick={start}>
        Let&apos;s start
      </button>
    </div>
  );
};

export default StartScreen;
