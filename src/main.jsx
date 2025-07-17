import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './Components/ThemeProvider.jsx'
import { AuthProvider } from './Context/authContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <ThemeProvider>
    <App />
    </ThemeProvider>
    </AuthProvider>
   
  </StrictMode>,
)
