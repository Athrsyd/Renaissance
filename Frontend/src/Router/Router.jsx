/**
 * Router.jsx
 *
 * Alur setelah register:
 *   /register → /placement (PilihKelas + TesAwal) → /dashboard
 *
 * /placement pakai ProtectedRoute requirePlacement=false
 *   → butuh login, tapi belum butuh punya kelas
 *
 * Semua route lain pakai ProtectedRoute requirePlacement=true (default)
 *   → jika belum placement → redirect ke /placement
 */
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/AuthPages/Login'
import Register from '../pages/AuthPages/Register'
import DashboardPage from '../pages/DashboardPage'
import AcademyPage from '../pages/AcademyPage'
import ChatbotAureus from '../pages/ChatbotAureus'
import Community from '../pages/Community'
import ProtectedRoute from '../Hook/ProtectedRoute'
import ModulPage from '../pages/ModulPage'
import NotFound from '../pages/NotFound'
import MAPEL_LIST from '../Config/mapelConfig'
import Progress from '../pages/Progress'
import PlacementTest from '../pages/PlacementTest'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}
      <Route path="/login"    element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Placement — butuh login, tapi TIDAK butuh kelas (requirePlacement=false) */}
      <Route
        path="/placement"
        element={
          <ProtectedRoute requirePlacement={false}>
            <PlacementTest />
          </ProtectedRoute>
        }
      />

      {/* Protected routes — butuh login + sudah placement */}
      <Route path="/academy"   element={<ProtectedRoute><AcademyPage /></ProtectedRoute>} />
      <Route path="/chatbot"   element={<ProtectedRoute><ChatbotAureus /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
      <Route path="/progress"  element={<ProtectedRoute><Progress /></ProtectedRoute>} />

      {/* Mapel routes — auto-generated dari mapelConfig.js */}
      {MAPEL_LIST.filter((m) => m.slug !== null).map((mapelConfig) => (
        <Route
          key={mapelConfig.id}
          path={`/academy/${mapelConfig.slug}`}
          element={
            <ProtectedRoute>
              <ModulPage mapelConfig={mapelConfig} />
            </ProtectedRoute>
          }
        />
      ))}

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router