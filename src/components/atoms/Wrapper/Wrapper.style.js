import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 0 auto;
  padding: 2rem;

  ${({ isFlex }) =>
    isFlex &&
    css`
      display: flex;
      justify-content: center;
      align-content: center;
    `}

  @media ${({ theme }) => theme.mq.tablet} {
    padding: 1rem 4rem;
  }

  @media ${({ theme }) => theme.mq.bigTablet} {
    padding: 2rem 6rem;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
