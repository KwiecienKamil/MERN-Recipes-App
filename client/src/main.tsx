import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer 
    position='bottom-right'
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    theme='light'
    />
  </React.StrictMode>,
)
