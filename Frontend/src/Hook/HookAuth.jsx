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
  const [userData, setUserData] = useState(null);

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
        navigate('/dashboard');
      }, 2000);

      // reset form
      setEmail('');
      setPassword('');

    } catch (error) {
      console.error('Error logging in user:', error);
      setMessage(error.response.data.message);
    }
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await API.get('/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserData(response.data);
      // console.log();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = async () => {
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

      navigate('/');
    } catch (error) {
      console.error('Error logging out user:', error);
    }
  }


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
    handleSubmitLogin,
    fetchUserData,
    userData,
    handleLogout
  }

}

export default HookAuth