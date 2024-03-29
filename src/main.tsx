import './styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <AuthProvider>
    <Routes />
  </AuthProvider>
  // </React.StrictMode>
)
