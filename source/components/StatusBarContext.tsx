import React, { createContext, useState, useContext } from 'react';

interface StatusBarContextType {
  statusBarColor: StatusBarStyle;
  setStatusBarColor: (color: StatusBarStyle) => void;
}

type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

const StatusBarContext = createContext<StatusBarContextType>({
  statusBarColor: 'dark-content',
  setStatusBarColor: () => {},
});

export const useStatusBar = () => useContext(StatusBarContext);

export const StatusBarProvider: React.FC = ({ children }) => {
  const [statusBarColor, setStatusBarColor] = useState<StatusBarStyle>('dark-content');

  return (
    <StatusBarContext.Provider value={{ statusBarColor, setStatusBarColor }}>
      {children}
    </StatusBarContext.Provider>
  );
};
