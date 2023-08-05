import React from 'react';
import {useTheme} from "./providers/ThemeProvider/";
import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss';
import {AppRouter} from "App/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <main className='main'>
        <Sidebar/>
        <AppRouter/>
      </main>

    </div>
  );
};

export default App;

