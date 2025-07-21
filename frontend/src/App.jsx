import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import TradingMarkets from './components/TradingMarkets'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Stats from './components/Stats'
import Footer from './components/reusable/Footer'
import AdminDashboard from './pages/AdminDashboard'
import DemoPage from './pages/DemoPage'
import { ThemeProvider } from './contexts/ThemeProvider'

// Main landing page component
const LandingPage = () => (
  <>
    <Hero />
    <TradingMarkets />
    <HowItWorks />
    <Features />
    <Stats />
    <Footer />
  </>
)

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
