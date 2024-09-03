import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx'
import { UserProvider } from './UserContext';  // Import the UserProvider
import './index.css'

createRoot(document.getElementById('root')!).render(
  <UserProvider>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  </UserProvider>
)
