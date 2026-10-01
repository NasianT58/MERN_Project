import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router"
import { Toaster} from "react-hot-toast"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* wrap the App component in a BrowserRouter component to enable routing in the app */}
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
