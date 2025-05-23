import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from "react-i18next";
import i18n from './i18n.ts'
import App from './App.tsx'

// style 
import './assets/style/root.sass'

createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <StrictMode>
      <App />
    </StrictMode>
  </I18nextProvider>,
)
