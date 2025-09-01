import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import I18nProvider from './i18n/I18nProvider'; // ← eklendi

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider defaultLang="tr">
      {' '}
      {/* ← eklendi */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>
);
