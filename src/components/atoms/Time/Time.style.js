import styled, { css } from 'styled-components';

export const Time = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.font.size.big};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.bigger};
  }

  @media ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.biggest};
  }

  ${({ isSmall }) =>
    isSmall &&
    css`
      font-size: ${({ theme }) => theme.font.size.xxl};
      font-weight: ${({ theme }) => theme.font.weight.regular};

      @media ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.font.size.xxxl};
      }

      @media ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.big};
      }
    `}
`;
