// import React from 'react'
import { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// 
const HookAuth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitRegister = async (e) => {
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
      setMessage(error.response.data.message);
    }
  };

  const handleSubmitLogin = async (e) => {
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
        navigate('/');
      }, 2000);
      
      // reset form
      setEmail('');
      setPassword('');
      
    } catch (error) {
      console.error('Error logging in user:', error);
      setMessage(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  }

  return {
    email,
    name,
    password,
    message,
    handleChange,
    handleSubmitRegister,
    handleSubmitLogin
  }

}

export default HookAuth