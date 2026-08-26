import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'    
import Stair from './components/common/Stair.jsx'    
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stair/>
  <App />
  </BrowserRouter>
  </StrictMode>
  
)
