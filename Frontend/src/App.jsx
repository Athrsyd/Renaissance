import './index.css'
import LandingPage from './pages/LandingPage'
import Router from './Router/Router'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {

  return (
    <>
      <SkeletonTheme baseColor="#cbb799" highlightColor="#f2e0d2">
        <Router />
      </SkeletonTheme>
    </>
  )
}

export default App
