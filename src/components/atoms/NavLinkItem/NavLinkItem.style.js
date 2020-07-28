import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkItem = styled(NavLink)`
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(100%);
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover::after {
    transform: translateX(0);
  }

  &.active::after {
    transform: translateX(0);
  }

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.l};
  }

  @media ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;
