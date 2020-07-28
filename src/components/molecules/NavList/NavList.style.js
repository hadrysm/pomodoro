import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.level8};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  ${({ isVisibility }) =>
    isVisibility &&
    css`
      transform: translateX(0);
    `}

  @media ${({ theme }) => theme.mq.desktop}{
    position: static;
    flex-direction: row;
    justify-content: flex-start;
    width: auto;
    height: auto;
  }
`;

export const InnerWrapper = styled.div`
  display: block;
  padding: 0 6rem;

  @media ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${({ isFlex }) =>
    isFlex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;
    `}

    @media ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
  }
`;
