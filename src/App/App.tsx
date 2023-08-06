import React, { Suspense } from 'react';
import { useTheme } from 'App/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { AppRouter } from 'App/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="<div>Loading...</div>">
        <Navbar />
        <main className="main wrapp">
          <Sidebar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
