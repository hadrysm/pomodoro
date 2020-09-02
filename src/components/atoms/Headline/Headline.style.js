import styled from 'styled-components';

export const Headline = styled.h2`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 1.3;

  @media ${({ theme }) => theme.mq.bigTablet} {
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
`;
