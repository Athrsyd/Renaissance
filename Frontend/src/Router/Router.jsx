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
 *
 * PERUBAHAN: Route mapel kini menyertakan kelas di URL:
 *   /academy/kelas-{kelas}/{slug}
 * sehingga setiap kelas punya URL terpisah dan ModulPage mendapat mapelConfig yang tepat.
 * Route lama /academy/{slug} tetap ada sebagai redirect via ModulPageResolver
 * yang membaca kelas user dari konteks.
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
import ModulPageResolver from '../pages/ModulPageResolver'
import NotFound from '../pages/NotFound'
import MAPEL_LIST from '../Config/mapelConfig'
import Progress from '../pages/Progress'
import LeaderboardPage from '../pages/LeaderboardPage'
import PlacementTest from '../pages/PlacementTest'
import QuizPage from '../pages/QuizPage'

// Dapatkan slug unik dari semua mapel
const uniqueSlugs = [...new Set(MAPEL_LIST.filter((m) => m.slug !== null).map((m) => m.slug))]

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
      <Route path="/progress"     element={<ProtectedRoute><Progress /></ProtectedRoute>} />
      <Route path="/leaderboard"  element={<ProtectedRoute><LeaderboardPage /></ProtectedRoute>} />

      {/* Mapel routes dengan kelas eksplisit: /academy/kelas-10/matematika */}
      {MAPEL_LIST.filter((m) => m.slug !== null).map((mapelConfig) => (
        <Route
          key={mapelConfig.id}
          path={`/academy/kelas-${mapelConfig.kelas}/${mapelConfig.slug}`}
          element={
            <ProtectedRoute>
              <ModulPage mapelConfig={mapelConfig} />
            </ProtectedRoute>
          }
        />
      ))}

      {/* Quiz routes dengan kelas eksplisit */}
      {MAPEL_LIST.filter((m) => m.slug !== null).map((mapelConfig) => (
        <Route
          key={`quiz-${mapelConfig.id}`}
          path={`/academy/kelas-${mapelConfig.kelas}/${mapelConfig.slug}/quiz`}
          element={
            <ProtectedRoute>
              <QuizPage />
            </ProtectedRoute>
          }
        />
      ))}

      {/* Route lama /academy/{slug} — resolve ke kelas user secara otomatis */}
      {uniqueSlugs.map((slug) => (
        <Route
          key={`resolve-${slug}`}
          path={`/academy/${slug}`}
          element={
            <ProtectedRoute>
              <ModulPageResolver slug={slug} />
            </ProtectedRoute>
          }
        />
      ))}

      {/* Quiz route lama /academy/{slug}/quiz — resolve ke kelas user */}
      {uniqueSlugs.map((slug) => (
        <Route
          key={`resolve-quiz-${slug}`}
          path={`/academy/${slug}/quiz`}
          element={
            <ProtectedRoute>
              <QuizPage />
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
