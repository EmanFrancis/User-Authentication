import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './login/login.tsx'
import Navigation from './landing-page/Navigation.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  <Navigation/>
   <Login/>
  </StrictMode>,
)
