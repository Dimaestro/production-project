import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps> = ({className}) => {
  const {t} = useTranslation()
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ul className={classNames(cls.NavbarList)}>
        <li>
          <AppLink to={'/'}>
            {t('Главная')}
          </AppLink>
        </li>
        <li>
          <AppLink to={'/about'}>
            {t('О нас')}
          </AppLink>
        </li>
      </ul>
    </nav>
  );
};

