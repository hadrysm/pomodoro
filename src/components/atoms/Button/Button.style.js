import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  min-width: 15rem;
  padding: 1.3rem 1.8rem;
  margin: 0.5rem 0;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.m};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  cursor: pointer;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  @media ${({ theme }) => theme.mq.desktop} {
    margin: 1rem;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      border-color: ${({ theme }) => theme.colors.tertiary};
      color: ${({ theme }) => theme.colors.tertiary};

      &:hover {
        background-color: ${({ theme }) => theme.colors.tertiary};
        color: ${({ theme }) => theme.colors.background};
      }
    `}
`;
