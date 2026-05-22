import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { LazyMotion, domMax } from "motion/react";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={domMax}>
      <App />
    </LazyMotion>
  </StrictMode>,
);
