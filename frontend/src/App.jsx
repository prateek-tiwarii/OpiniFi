import './App.css'
import Hero from './components/Hero'
import TradingMarkets from './components/TradingMarkets'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Stats from './components/Stats'
import NewsFeed from './components/NewsFeed'
import Footer from './components/reusable/Footer'

function App() {

  return (
    <>
      <Hero />
      <TradingMarkets />
      <HowItWorks />
      <Features />
      <Stats />
      <NewsFeed />
      <Footer />
    </>
  )
}

export default App
