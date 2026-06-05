// Entry point for the React application. Sets up React Router, Bootstrap, and the global Cart context.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
   </CartProvider>
  </StrictMode>,

)