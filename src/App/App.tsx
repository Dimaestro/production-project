import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {useTheme} from "./providers/ThemeProvider/";
import {classNames} from "shared/lib/classNames/classNames";

import './styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button
        type='button'
        onClick={toggleTheme}
      >
        Toggle
      </button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={'<div>Loading...</div>'}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage/>} />
        </Routes>
      </Suspense>

    </div>
  );
};

export default App;

