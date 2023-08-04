import React, {useMemo, useState} from 'react';
import {LOACAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../theme/ThemeContext";

const defaultTheme = localStorage.getItem(LOACAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface IProps {
  children: React.ReactNode,
}
const ThemeProvider: React.FC<IProps> = ({children}) => {

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => (
    {
      theme: theme,
      setTheme: setTheme,
    }
  ), [theme])

  return (
    <div>
      <ThemeContext.Provider value={defaultProps}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
