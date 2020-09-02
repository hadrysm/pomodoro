import { createContext } from 'react';

export const AppContext = createContext({
  onStartTimer: () => {},
  onStopTimer: () => {},
});
