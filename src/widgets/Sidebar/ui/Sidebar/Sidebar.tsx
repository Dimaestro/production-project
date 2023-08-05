import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher/ui/LanguageSwitcher";
import Icon from '../../../../shared/assets/icon/icon.png'
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
      {/*<Icon width={30} height={30} className={cls.SidebarIcon}/>*/}
      <ul className={cls.switchers}>
        <li>
          <ThemeSwitcher/>
        </li>
        <li>
          <LanguageSwitcher/>
        </li>
      </ul>
    </div>
  );
};
