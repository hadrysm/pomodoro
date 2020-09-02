import React from 'react';
import PropTypes from 'prop-types';

import { Paragraph } from 'components/atoms/Paragraph/Paragraph.style';
import { Headline } from 'components/atoms/Headline/Headline.style';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon.style';
import plusIcon from 'assets/icons/plus.svg';
import minusIcon from 'assets/icons/minus.svg';
import { InnerWrapper, Wrapper } from './TimeSettingsBox.style';

const TimeSettingsBox = ({ settingValue, incrementTime, decrementTime, settingType }) => {
  const handleIncrement = (type) => {
    if (settingValue >= 60) return;
    incrementTime(type);
  };

  const handleDecrement = (type) => {
    if (settingValue <= 0) return;
    decrementTime(type);
  };

  return (
    <Wrapper>
      <Headline>{settingType === 'sessionLength' ? 'session' : 'break'}</Headline>
      <InnerWrapper>
        <ButtonIcon icon={plusIcon} type="button" onClick={() => handleIncrement(settingType)} />
        <Paragraph>{settingValue}</Paragraph>
        <ButtonIcon icon={minusIcon} type="button" onClick={() => handleDecrement(settingType)} />
      </InnerWrapper>
    </Wrapper>
  );
};

TimeSettingsBox.propTypes = {
  settingValue: PropTypes.number.isRequired,
  incrementTime: PropTypes.func.isRequired,
  decrementTime: PropTypes.func.isRequired,
  settingType: PropTypes.string.isRequired,
};

export default TimeSettingsBox;
