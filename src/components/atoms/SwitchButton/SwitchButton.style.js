import styled from 'styled-components';

export const StyledSwitchButton = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  height: 3.2rem;
  width: 5.2rem;
  border-radius: 1.6rem;
  display: inline-block;
  position: relative;
  margin: 0;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.background20} 100%
  );
  transition: all 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 1px 2px ${({ theme }) => theme.colors.background20};
    transition: transform 0.2s ease-in-out;
  }

  &:checked {
    border-color: #654fec;
    &:after {
      transform: translatex(20px);
    }
  }
`;
