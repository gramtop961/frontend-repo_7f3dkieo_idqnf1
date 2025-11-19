import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FlowBg from './components/FlowBg'

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white relative">
      <FlowBg />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <Pricing />
      <CTA />
      <footer className="py-10 text-center text-sm text-[#B0B0B0]">© {new Date().getFullYear()} PackTrack • Packaging proof for every order</footer>
    </div>
  )
}

export default App
