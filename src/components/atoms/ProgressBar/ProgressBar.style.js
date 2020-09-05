import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 0;
  width: 10px;
  height: 100vh;
  background-color: transparent;
`;

export const Track = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background20};
`;

export const ProgressBarTrack = styled(Track)`
  background-color: ${({ theme }) => theme.colors.primary};
  transform: ${({ progress }) => `translateY(-${progress}%)`};

  transition: transform 1000ms linear;
`;
