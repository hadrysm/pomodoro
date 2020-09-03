import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, CircleTrack, CircleThumb } from './CircleProgressBar.style';

const CircleProgressBar = ({ size, strokeWidth, progress }) => {
  const [offSet, setOffSet] = useState(0);
  const circleRef = useRef(null);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!progress) return;

    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffSet(progressOffset);

    circleRef.current.style = 'transition: stroke-dashoffset 1000ms linear';
  }, [setOffSet, progress, circumference, offSet]);

  return (
    <Wrapper>
      <svg width={size} height={size}>
        <CircleTrack cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
        <CircleThumb
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offSet}
        />
      </svg>
    </Wrapper>
  );
};

CircleProgressBar.propTypes = {
  size: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.string.isRequired,
};

export default CircleProgressBar;
