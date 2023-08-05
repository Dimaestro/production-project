import App from "./App/App";
import './App/styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import ThemeProvider from "./App/providers/ThemeProvider/ui/ThemeProvider";
import React from "react";
import "shared/config/i18n/i18n";

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
);
