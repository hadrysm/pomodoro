import React from 'react';

import PageTemplate from 'templates/PageTemplate';
import { Headline } from 'components/atoms/Headline/Headline.style';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph.style';
import SwitchButton from 'components/atoms/SwitchButton';
import { Section } from './SettingPage.style';

const SettingsPage = () => {
  return (
    <PageTemplate>
      <Section>
        <Headline>Color theme</Headline>
        <div>
          <SwitchButton type="checkbox" />
          <Paragraph>color theme</Paragraph>
        </div>
      </Section>
    </PageTemplate>
  );
};

export default SettingsPage;
