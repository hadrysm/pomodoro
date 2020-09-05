import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDarkMode } from 'hooks/useDarkMode';
import { themeColorsType } from 'store/settings/types';

import PageTemplate from 'templates/PageTemplate';
import TimeSettingsBox from 'components/molecules/TimeSettingsBox';
import { Headline } from 'components/atoms/Headline/Headline.style';
import SwitchButton from 'components/atoms/SwitchButton';
import { incrementTime, decrementTime } from 'store/timer/actions';
import { timerLabel } from 'store/timer/types';
import { Section } from './SettingPage.style';

const SettingsPage = () => {
  const [theme, toggleTheme] = useDarkMode();

  const dispatch = useDispatch();

  const sessionLength = useSelector(({ timer }) => timer.sessionLength);
  const breakLength = useSelector(({ timer }) => timer.breakLength);
  const timerInProgress = useSelector(({ timer }) => timer.timerInProgress);

  const handleIncrement = (settingType) => {
    dispatch(incrementTime(settingType));
  };

  const handleDecrement = (settingType) => {
    dispatch(decrementTime(settingType));
  };

  return (
    <PageTemplate>
      <Section>
        <Headline>Color theme</Headline>
        <div>
          <SwitchButton
            type="checkbox"
            checked={theme === themeColorsType.DARK}
            onChange={() => toggleTheme()}
          />
        </div>
      </Section>

      <Section>
        <Headline>Cycle time in minutes</Headline>
        <TimeSettingsBox
          timerInProgress={timerInProgress}
          settingType={timerLabel.SESSION}
          settingValue={sessionLength}
          incrementTime={handleIncrement}
          decrementTime={handleDecrement}
        />
        <TimeSettingsBox
          timerInProgress={timerInProgress}
          settingType={timerLabel.BREAK}
          settingValue={breakLength}
          incrementTime={handleIncrement}
          decrementTime={handleDecrement}
        />
      </Section>
    </PageTemplate>
  );
};

export default SettingsPage;
