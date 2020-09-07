import React from 'react';

import PageTemplate from 'templates/PageTemplate';
import { Wrapper, FlexWrapper } from 'components/atoms/Wrapper/Wrapper.style';
import { Section } from 'components/atoms/Section/Section.style';
import { Headline } from 'components/atoms/Headline/Headline.style';
import { List, ListItem } from 'components/atoms/List/List.style';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph.style';
import { Icon } from 'components/atoms/Icon/Icon.style';
import { ButtonIcon } from 'components/atoms/ButtonIcon/ButtonIcon.style';
import { generateUniqueId } from 'helpers';

import tickIcon from 'assets/icons/tick.svg';
import githubIcon from 'assets/icons/github.svg';
import linkedin from 'assets/icons/linkedin.svg';

const techData = [
  {
    id: generateUniqueId(),
    content: 'create react app',
  },
  {
    id: generateUniqueId(),
    content: 'react hooks',
  },
  {
    id: generateUniqueId(),
    content: 'redux',
  },
  {
    id: generateUniqueId(),
    content: 'styled-components',
  },
  {
    id: generateUniqueId(),
    content: 'prop-types',
  },
  {
    id: generateUniqueId(),
    content: 'husky | lint-staged',
  },
  {
    id: generateUniqueId(),
    content: 'eslint | prettier',
  },
];

const AboutPage = () => {
  const listElements = techData.map(({ id, content }) => (
    <ListItem key={id}>
      <FlexWrapper>
        <Icon iconImage={tickIcon} />
        <Paragraph>{content}</Paragraph>
      </FlexWrapper>
    </ListItem>
  ));

  return (
    <PageTemplate>
      <Wrapper>
        <Section>
          <Paragraph justify>
            <Paragraph as="strong" isBig>
              Pomodoro™ Technique
            </Paragraph>
            is a time management method developed by Francesco Cirillo in the late 1980s. This
            technique use timer to break down works into a set of intervals separated by breaks.
            Pomodoro technique increases productivity by taking short scheduled breaks regularly.
            The application was created for educational purposes.
          </Paragraph>
        </Section>
        <Section>
          <Headline>Tech:</Headline>
          <List isColumn>{listElements}</List>
        </Section>
        <Section>
          <ButtonIcon
            primaryBgc
            customMargin="0.5rem"
            icon={githubIcon}
            as="a"
            href="https://github.com/hadrysm"
          />
          <ButtonIcon
            primaryBgc
            customMargin="0.5rem"
            icon={linkedin}
            as="a"
            href="https://www.linkedin.com/"
          />
        </Section>
      </Wrapper>
    </PageTemplate>
  );
};

export default AboutPage;
