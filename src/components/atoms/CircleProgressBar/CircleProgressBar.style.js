import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 70%;
`;

export const CircleTrack = styled.circle`
  stroke: ${({ theme }) => theme.colors.background20};
  /* stroke-width: 2px; */
  fill: transparent;
`;

export const CircleThumb = styled.circle`
  stroke: ${({ theme }) => theme.colors.secondary};
  /* stroke-width: 2px; */
  fill: transparent;
`;
