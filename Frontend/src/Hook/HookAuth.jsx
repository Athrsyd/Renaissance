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
      const response = await API.post('/auth/register', { email, name, password });
      console.log(response.data);
      setEmail('');
      setName('');
      setPassword('');
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage(error.response.data.message);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/login', { email, password });
      console.log(response.data);
      setEmail('');
      setMessage(response.data.message);
      setPassword('');
      setTimeout(() => {
        navigate('/landing2');
      }, 1000);
    } catch (error) {
      console.error('Error logging in user:', error);
      setMessage(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
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