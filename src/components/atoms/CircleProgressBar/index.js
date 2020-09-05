import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Track, ProgressBarTrack } from './CircleProgressBar.style';

const ProgressBar = ({ progress }) => {
  return (
    <Wrapper>
      <Track />
      <ProgressBarTrack progress={progress} />
    </Wrapper>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
