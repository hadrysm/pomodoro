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
`;

export const InnerWrapper = styled.div`
  display: block;
  padding: 0 6rem;

  ${({ isFlex }) =>
    isFlex &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;
    `}
`;
