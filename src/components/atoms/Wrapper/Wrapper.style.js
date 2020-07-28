import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 0 auto;
  padding: 2rem;

  @media ${({ theme }) => theme.mq.tablet} {
    padding: 4rem;
  }

  @media ${({ theme }) => theme.mq.bigTablet} {
    padding: 6rem;
  }
`;
