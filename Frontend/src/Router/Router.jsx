import React from 'react'
import LandingPage from '../pages/LandingPage'
import { Route, Routes} from 'react-router-dom'
import Login from '../pages/AuthPages/Login'
import Register from '../pages/AuthPages/Register'
import Testing from './testing'
import LandingPage2 from '../pages/LandingPage2'
import DashboardPage from '../pages/DashboardPage'
import AcademyPage from '../pages/AcademyPage'
// import ChatbotUI from '../components/ChatbotUI'
import ChatbotAureus from '../pages/ChatbotAureus'
import Community from '../pages/Community'
import ProtectedRoute from '../Hook/ProtectedRoute'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/academy" element={<ProtectedRoute><AcademyPage /></ProtectedRoute>} />
      <Route path="/chatbot" element={<ProtectedRoute><ChatbotAureus /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
      {/* <Route path="/landing2" element={<LandingPage2 />} /> */}
      <Route path="/testing" element={<Testing />} />
    </Routes>
  );
}



export default Router