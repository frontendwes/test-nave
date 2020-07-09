import { useEffect, useState } from 'react'
import history from '../../history'

import api from '../../services/api'

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('NaverToken')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  const handleLogin = async (formData) => {
    const data = {
      email: formData.email,
      password: formData.password,
    }

    try {
      const response = await api.post('/users/login', data)
      const token = response && response.data.token
      if (token) {
        localStorage.setItem('NaverToken', token)
        api.defaults.headers.Authorization = `Bearer ${token}`
        setAuthenticated(true)
        history.push('/')
      }
    } catch (e) {
      alert('Usuario ou senha invalido')
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    localStorage.removeItem('NaverToken')
    api.defaults.headers.Authorization = undefined
    history.push('/login')
  }

  return { authenticated, loading, handleLogin, handleLogout }
}

export default useAuth
