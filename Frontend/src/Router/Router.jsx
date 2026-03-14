import React from 'react'
import LandingPage from '../pages/LandingPage'
import { Route, Routes} from 'react-router-dom'
import Login from '../pages/AuthPages/Login'
import Register from '../pages/AuthPages/Register'
import Testing from './testing'
import LandingPage2 from '../pages/LandingPage2'

const Router = () => {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/landing2" element={<LandingPage2 />} />
      <Route path="/testing" element={<Testing/>}/>
    </Routes>
  )
}



export default Router