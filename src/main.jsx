import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CommonContextData } from './context/CommonContext.jsx'

createRoot(document.body).render(
  <StrictMode>
    <CommonContextData>
      <App />
    </CommonContextData>
  </StrictMode>,
)
