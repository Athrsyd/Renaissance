import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const tokenRenaissance = localStorage.getItem('tokenRenaissance')

    if (!tokenRenaissance) {
        return  <Navigate to="/login" replace />
    }

  return children
}

export default ProtectedRoute