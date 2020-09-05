import styled from 'styled-components';

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  position: relative;

  @media ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin-top: 10rem;
  }
`;
