import { useEffect, useState } from "react";

const useCounter = () => {
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer;

    if (counter > maxCount) {
      throw new Error(`Counter can't be bigger than the Max Count!`);
    }

    if (play) {
      timer = setInterval(() => {
        if (counter < maxCount) {
          setCounter(c => c + 1);
        } else {
          setPlay(false);
          return;
        }
      }, duration);
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter, play]);

  return [setDuration, setMaxCount, setPlay, setCounter, counter];
};

export default useCounter;
