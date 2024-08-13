import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Bottom from '../components/Bottom'
// import HeroSection from '../components/HeroSection'
// import Hero from '../components/Hero'
import App from './App'
// import NavBar from '../components/NavBar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < App />
  </StrictMode>,
)
