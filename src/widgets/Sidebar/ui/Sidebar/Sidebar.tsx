import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}
export const Sidebar: React.FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleButtonSidebar = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={toggleButtonSidebar}>
        toggle
      </button>
      <ul className={cls.switchers}>
        <li>
          <ThemeSwitcher/>
        </li>
      </ul>
    </div>
  );
};
