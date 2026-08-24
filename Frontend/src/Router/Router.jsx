/**
 * Router.jsx
 * Sebelumnya: setiap mapel punya route tersendiri yang hardcoded,
 * termasuk URL dengan spasi ("/academy/Pendidikan Pancasila").
 *
 * Sekarang: route mapel di-generate otomatis dari MAPEL_LIST.
 * Tambah mapel baru di mapelConfig.js → route langsung tersedia.
 * Semua slug sudah lowercase-hyphen, tidak ada spasi di URL.
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

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected static routes */}
      <Route path="/academy"   element={<ProtectedRoute><AcademyPage /></ProtectedRoute>} />
      <Route path="/chatbot"   element={<ProtectedRoute><ChatbotAureus /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
      <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />

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
