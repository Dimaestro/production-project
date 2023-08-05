import React, {Suspense} from 'react';
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
      <Suspense fallback={'<div>Loading...</div>'}>
        <Navbar/>
        <main className='main'>
          <Sidebar/>
          <AppRouter/>
        </main>
      </Suspense>
    </div>
  );
};

export default App;

