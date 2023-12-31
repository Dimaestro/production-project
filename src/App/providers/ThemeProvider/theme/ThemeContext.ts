import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const LOACAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
