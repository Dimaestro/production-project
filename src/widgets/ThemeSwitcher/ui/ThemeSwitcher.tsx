import React from 'react';
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "App/providers/ThemeProvider";
import Icon from 'shared/assets/icon/day-and-night-icon.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({className}) => {
  const {toggleTheme} = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      type='button'
      onClick={toggleTheme}
    >
      <Icon width={30} height={30} className={cls.ThemeSwitcherIcon}/>
    </Button>
  );
};
