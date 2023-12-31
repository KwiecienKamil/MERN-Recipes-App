import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <ToastContainer 
    position='bottom-right'
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    theme='light'
    />
    </BrowserRouter>
  </React.StrictMode>,
)
