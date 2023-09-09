import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const Timer = () => {
  const { secondsRemaining, timeCheck } = useAppContext();

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => timeCheck(), 1000);
      return () => clearInterval(id);
    },
    [timeCheck]
  );

  return (
    <div className='timer'>
      {hours < 10 && "0"}
      {hours}:{minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
