import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <Pricing />
      <CTA />
      <footer className="py-10 text-center text-sm text-slate-400">© {new Date().getFullYear()} PackTrack • Packaging proof for every order</footer>
    </div>
  )
}

export default App
