/**
 * ProtectedRoute.jsx
 *
 * requirePlacement (default true):
 *   - true  → route ini butuh user sudah selesai placement (punya kelas)
 *             jika belum → redirect ke /placement
 *   - false → route ini hanya butuh login (misal: /placement itu sendiri)
 *             jika belum login → redirect ke /login
 */
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import API from '../services/api'

const ProtectedRoute = ({ children, requirePlacement = true }) => {
  const token = localStorage.getItem('tokenRenaissance')

  // Jika tidak ada token → selalu redirect ke login
  if (!token) return <Navigate to="/login" replace />

  // Jika route tidak butuh cek placement → langsung render
  if (!requirePlacement) return children

  return <PlacementGuard token={token}>{children}</PlacementGuard>
}

// Guard tambahan: cek apakah user sudah placement
const PlacementGuard = ({ token, children }) => {
  const [status, setStatus] = useState(null) // null = loading, true = ok, false = belum placement

  useEffect(() => {
    const check = async () => {
      try {
        const res = await API.get('/placement/status', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setStatus(res.data.placement_selesai === true)
      } catch {
        // Gagal cek → biarkan masuk (jangan block user)
        setStatus(true)
      }
    }
    check()
  }, [token])

  // Loading state — tampilkan blank / spinner tipis
  if (status === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF5F0]">
        <div className="w-6 h-6 border-2 border-bistre/30 border-t-bistre rounded-full animate-spin" />
      </div>
    )
  }

  if (!status) return <Navigate to="/placement" replace />

  return children
}

export default ProtectedRoute