import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 10px;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  border-radius: 2rem;
`;

export const Track = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background20};
`;

export const ProgressBarTrack = styled(Track)`
  background-color: ${({ theme }) => theme.colors.primary};
  transform: ${({ progress }) => `translateX(-${progress}%)`};

  transition: transform 1000ms linear;
`;
