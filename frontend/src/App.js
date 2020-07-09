import React from 'react'
import { Router } from 'react-router-dom'

import './global.css'
import Routes from './routes'
import history from './history'

import { AuthProvider } from './Context/AuthContext'
function App() {
  return (
    <AuthProvider value={{ authenticated: false }}>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  )
}

export default App
