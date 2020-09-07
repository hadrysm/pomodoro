import styled, { css } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${({ isColumn }) =>
    isColumn &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      @media ${({ theme }) => theme.mq.desktop} {
        justify-content: space-between;
        align-items: flex-start;
      }
    `}
`;

export const ListItem = styled.li`
  margin: 0 0.5rem;
`;
