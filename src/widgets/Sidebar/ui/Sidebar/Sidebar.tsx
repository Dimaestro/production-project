import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import cls from './Sidebar.module.scss';

type SidebarProps = {
	className?: string;
};
export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleButtonSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={
      classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )
    }
    >
      <button type="button" onClick={toggleButtonSidebar}>
        toggle
      </button>
      <ul className={cls.switchers}>
        <li>
          <ThemeSwitcher />
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </div>
  );
};
