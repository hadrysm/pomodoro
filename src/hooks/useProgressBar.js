import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { convertToMilliseconds } from 'helpers';

import { timerLabel } from 'store/timer/types';

export const useProgressBar = () => {
  const [maxProgress, setMaxProgress] = useState(0);
  const [progress, setProgress] = useState(0);

  const sessionLength = useSelector(({ timer }) => timer.sessionLength);
  const breakLength = useSelector(({ timer }) => timer.breakLength);
  const timerName = useSelector(({ timer }) => timer.timerLabel);
  const currentTime = useSelector(({ timer }) => timer.currentTime);

  useEffect(() => {
    const getPercentageFromNumber = (timeLength) => {
      setMaxProgress(convertToMilliseconds(timeLength));
      const progressLeft = Math.floor((currentTime / maxProgress) * 100);
      setProgress(progressLeft);
    };

    if (timerName === timerLabel.SESSION) {
      getPercentageFromNumber(sessionLength);
    } else if (timerName === timerLabel.BREAK) {
      getPercentageFromNumber(breakLength);
    }
  }, [maxProgress, setMaxProgress, timerName, sessionLength, breakLength, currentTime]);

  return progress;
};
