// import React from 'react'
import { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// 
const HookAuth = () => {
  const navigate = useNavigate();
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmitRegister = async (e) => {
    setIsAuthLoading(true);
    e.preventDefault();
    try {

      // post data ke backend
      const response = await API.post('/auth/register', { email, name, password });
      console.log(response.data);

      // Reset form
      setName('');
      setEmail('');
      setPassword('');

      // arahin ke login kalau register berhasil
      setTimeout(() => {
        navigate('/login');
      }, 2000);

      // Set success message
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage(error.response?.data.message);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleSubmitLogin = async (e) => {
    setIsAuthLoading(true);
    e.preventDefault();
    try {
      // post data ke backend
      const response = await API.post('/auth/login', { email, password });
      console.log(response.data);

      // simpan token ke localStorage
      const token = response.data.token;
      localStorage.setItem('token', token);

      // set data pesan saat berhasil
      setMessage(response.data.message);

      // pindah ke dashboard kalau login berhasil
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);

      // reset form
      setEmail('');
      setPassword('');

    } catch (error) {
      console.error('Error logging in user:', error);
      setMessage(error.response?.data.message);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const fetchUserData = async () => {
    setIsAuthLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await API.get('/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserData(response.data);
      // console.log();
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsAuthLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await API.delete("/auth/logout", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      localStorage.removeItem("token");
      setUserData(null);
      alert(response.data.message);
      setTimeout(() => {
        navigate('/');
      }, 1000);

    } catch (error) {
      console.error('Error logging out user:', error);
    } finally {
      setIsAuthLoading(false);
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  }

  const uploadProfilePicture = async (file) => {
    setIsAuthLoading(true)
    try {
      const token = localStorage.getItem('token')
      const formData = new FormData()
      formData.append('photo', file)
      
      const response = await API({
        method: 'put',
        url: '/auth/profile',
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      
      console.log('✅ Upload response:', response.data)
      return response.data
    } catch (error) {
      console.error('❌ Upload error:', error)
      throw error
    } finally {
      setIsAuthLoading(false)
    }
  };

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
    isAuthLoading
  }

}

export default HookAuth