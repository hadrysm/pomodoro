import styled from 'styled-components';

export const ButtonIcon = styled.button`
  display: inline-block;
  width: 67px;
  height: 67px;
  margin: ${({ customMargin }) => (customMargin ? `${customMargin}` : '0 2rem')};
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  background-color: ${({ theme, primaryBgc }) =>
    primaryBgc ? theme.colors.primary : theme.colors.white20};
  border: none;
  cursor: pointer;

  :hover {
    background-color: ${({ theme, primaryBgc }) =>
      primaryBgc ? theme.colors.secondary : theme.colors.white};
  }

  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
