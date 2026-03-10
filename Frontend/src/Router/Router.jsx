import React from 'react'
import LandingPage from '../pages/LandingPage'
import { Route, Routes} from 'react-router-dom'
import LandingPage2 from '../components/LandingPage2'

const Router = () => {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/landing2" element={<LandingPage2 />} />
      <Route path="/testing" element={<testing/>}/>
    </Routes>
  )
}



export default Router