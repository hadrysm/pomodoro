import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  ${({ isBig }) =>
    isBig &&
    css`
      font-size: ${({ theme }) => theme.font.size.m};
      color: ${({ theme }) => theme.colors.primary};
      margin: 0.5rem 0;
      margin-right: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    `}

  ${({ justify }) =>
    justify &&
    css`
      text-align: justify;
    `}  

  @media ${({ theme }) => theme.mq.tablet}{
    font-size: ${({ theme }) => theme.font.size.xl};
  } 

   @media ${({ theme }) => theme.mq.desktop}{
    font-size: ${({ theme }) => theme.font.size.xxl};
  } 
`;
