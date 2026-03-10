import React from 'react'
import LandingPage from '../pages/LandingPage'
import { Route, Routes} from 'react-router-dom'
import LandingPage2 from '../components/LandingPage2'
import testing from './testing'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landing2" element={<LandingPage2 />} />
      <Route path="/testing" element={<testing/>}/>
    </Routes>
  )
}



export default Router