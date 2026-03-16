import React from 'react'
import Navbar from '../components/navbar'
import Mapel from '../components/Mapel'
import NavDasboard from '../components/NavDasboard'

const Testing = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Mapel />
        <NavDasboard/>
      </div>
    </>
  );
}

export default Testing
