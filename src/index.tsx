import App from "./App/App";
import './App/styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import ThemeProvider from "./App/providers/ThemeProvider/ui/ThemeProvider";
import React from "react";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
);
