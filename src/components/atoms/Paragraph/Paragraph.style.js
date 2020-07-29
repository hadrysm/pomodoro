import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;
