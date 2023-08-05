import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ul className={classNames(cls.NavbarList)}>
        <li>
          <AppLink to={'/'}>
            Main
          </AppLink>
        </li>
        <li>
          <AppLink to={'/about'}>
            About
          </AppLink>
        </li>
      </ul>
    </nav>
  );
};

