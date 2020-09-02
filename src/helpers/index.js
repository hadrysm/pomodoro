export const convertToMilliseconds = (number) => number * 1000 * 60;

export const getSeconds = (ms) => {
  const seconds = Math.floor((ms % 60000) / 1000);

  return seconds < 10 ? `0${seconds}` : seconds;
};

export const getMinutes = (ms) => {
  const minutes = Math.floor(ms / 1000 / 60);

  return minutes < 10 ? `0${minutes}` : minutes;
};
