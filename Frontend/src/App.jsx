import { Children } from 'react'
import './index.css'
import LandingPage from './pages/LandingPage'
import Router from './Router/Router'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

  const ScrollToTop = () => {
    const { pathname, search } = useLocation()

    useEffect(() => {
      const urlParams = new URLSearchParams(search)
      const scrollTo = urlParams.get("scrollTo")

      if (!scrollTo) {
        // document.documentElement.style.scrollBehavior = 'auto';
        
        setTimeout(() => {
          window.scrollTo(0, 0, { behavior: 'smooth' });
          
        }, 0);
      }
    }, [pathname, search])

    return null
  }
function App() {


  return (
    <>
      <ScrollToTop />
      <SkeletonTheme baseColor="#cbb799" highlightColor="#f2e0d2">
        <Router />
      </SkeletonTheme>
    </>
  )
}

export default App
