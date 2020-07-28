import styled, { css } from 'styled-components';

export const BurgerButton = styled.button`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level9};
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const BurgerLine = styled.span`
  display: block;
  width: 100%;

  &::after,
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    margin-bottom: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.2s ease-in-out;
  }

  ${({ isVisibility }) =>
    isVisibility &&
    css`
      &::before {
        transform: rotate(45deg) translateY(5px);
      }

      &::after {
        transform: rotate(-45deg) translateY(-5px);
      }
    `}
`;
