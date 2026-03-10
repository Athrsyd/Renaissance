import React from 'react'
import LandingPage from '../pages/LandingPage'
import { Route, Routes} from 'react-router-dom'
import LandingPage2 from '../components/LandingPage2'
import Login from '../pages/AuthPages/Login'
import Register from '../pages/AuthPages/Register'

const Router = () => {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/landing2" element={<LandingPage2 />} />
    </Routes>
  )
}



export default Router