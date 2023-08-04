import {LOACAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}
export const useTheme = (): UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? Theme.LIGHT: Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOACAL_STORAGE_THEME_KEY, newTheme)
  }

  return {theme, toggleTheme};
}
