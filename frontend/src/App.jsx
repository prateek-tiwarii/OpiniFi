import './App.css'
import Hero from './components/Hero'
import TradingMarkets from './components/TradingMarkets'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Stats from './components/Stats'
import NewsFeed from './components/NewsFeed'
import Footer from './components/reusable/Footer'
import { ThemeProvider } from './contexts/ThemeProvider'

function App() {

  return (
    <ThemeProvider>
      <Hero />
      <TradingMarkets />
      <HowItWorks />
      <Features />
      <Stats />
      <NewsFeed />
      <Footer />
    </ThemeProvider>
  )
}

export default App
