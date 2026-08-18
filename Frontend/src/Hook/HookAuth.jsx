import { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'

const HookAuth = () => {
  const navigate = useNavigate()
  const [isAuthLoading, setIsAuthLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [userData, setUserData] = useState(null)

  const handleSubmitRegister = async (e) => {
    setIsAuthLoading(true)
    e.preventDefault()
    try {
      const response = await API.post('/auth/register', { email, name, password })
      setName('')
      setEmail('')
      setPassword('')
      setMessage(response.data.message)
      setTimeout(() => navigate('/login'), 2000)
    } catch (error) {
      setMessage(error.response?.data.message)
    } finally {
      setIsAuthLoading(false)
    }
  }

  const handleSubmitLogin = async (e) => {
    setIsAuthLoading(true)
    e.preventDefault()
    try {
      const response = await API.post('/auth/login', { email, password })
      localStorage.setItem('tokenRenaissance', response.data.token)
      setMessage(response.data.message)
      setEmail('')
      setPassword('')
      setTimeout(() => navigate('/dashboard'), 2000)
    } catch (error) {
      setMessage(error.response?.data.message)
    } finally {
      setIsAuthLoading(false)
    }
  }

  const fetchUserData = async () => {
    setIsAuthLoading(true)
    try {
      const tokenRenaissance = localStorage.getItem('tokenRenaissance')
      const response = await API.get('/auth/profile', {
        headers: { Authorization: `Bearer ${tokenRenaissance}` },
      })
      return response.data
    } catch (error) {
      // Gagal fetch user — biarkan caller handle null
      return null
    } finally {
      setIsAuthLoading(false)
    }
  }

  const handleLogout = async () => {
    setIsAuthLoading(true)
    try {
      const tokenRenaissance = localStorage.getItem('tokenRenaissance')
      const response = await API.delete('/auth/logout', {
        headers: { Authorization: `Bearer ${tokenRenaissance}` },
      })
      localStorage.removeItem('tokenRenaissance')
      setUserData(null)
      alert(response.data.message)
      setTimeout(() => navigate('/'), 1000)
    } catch (error) {
      // Logout gagal — token lokal tetap dihapus agar tidak terjebak
      localStorage.removeItem('tokenRenaissance')
      navigate('/')
    } finally {
      setIsAuthLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'username') setName(value)
    else if (name === 'email') setEmail(value)
    else if (name === 'password') setPassword(value)
  }

  const uploadProfilePicture = async (file) => {
    setIsAuthLoading(true)
    try {
      const tokenRenaissance = localStorage.getItem('tokenRenaissance')
      const formData = new FormData()
      formData.append('photo', file)
      const response = await API({
        method: 'put',
        url: '/auth/profile',
        data: formData,
        headers: {
          Authorization: `Bearer ${tokenRenaissance}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (error) {
      throw error
    } finally {
      setIsAuthLoading(false)
    }
  }

  return {
    email,
    name,
    password,
    message,
    handleChange,
    handleSubmitRegister,
    handleSubmitLogin,
    fetchUserData,
    userData,
    handleLogout,
    uploadProfilePicture,
    isAuthLoading,
  }
}

export default HookAuth
