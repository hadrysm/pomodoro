import { useState, useEffect, useRef } from 'react';

export const useInterval = (callback, delay, isTimerOnInicial) => {
  const [timerOn, toggleTimer] = useState(isTimerOnInicial);
  const savedCallback = useRef(() => {});
  const intervalId = useRef(0);

  const start = () => toggleTimer(true);
  const stop = () => toggleTimer(false);
  const clear = (id) => clearInterval(id);
  const moveTime = () => savedCallback.current();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!timerOn) return;

    intervalId.current = setInterval(moveTime, delay);

    return () => clearInterval(intervalId.current);
  }, [delay, timerOn]);

  return [() => start(), () => stop(), () => clear(intervalId.current)];
};
