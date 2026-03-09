import React from 'react'
import LandingPage from '../pages/LandingPage'
import { Route, Routes} from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}



export default Router