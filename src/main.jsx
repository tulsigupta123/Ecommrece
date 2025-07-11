import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './App.css'
import App from './App.jsx'
 import { ToastContainer, toast } from 'react-toastify';
 import Context from './Components/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Context>
    <App />
    <ToastContainer/>
    </Context>
  </StrictMode>,
)
