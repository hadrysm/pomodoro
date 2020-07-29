import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level9};
  display: inline-block;
  text-decoration: none;
  margin: 0 0 0 -10px;
`;

export const StyledLogo = styled.h1`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.size.xl};
  letter-spacing: 0.5px;

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xxxl};
  }
`;
