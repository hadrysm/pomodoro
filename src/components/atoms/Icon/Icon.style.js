import styled from 'styled-components';

export const CircleIcon = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 1rem 0 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transform: scale(0.6);
`;
