import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReducedFeatures from './components/ReducedFeatures'
import FlowHighlights from './components/FlowHighlights'
import HowItWorks from './components/HowItWorks'
import ImageGallery from './components/ImageGallery'
import CaseStudies from './components/CaseStudies'
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
      <ReducedFeatures />
      <FlowHighlights />
      <HowItWorks />
      <ImageGallery />
      <CaseStudies />
      <Showcase />
      <Pricing />
      <CTA />
      <footer className="py-10 text-center text-sm text-[#B0B0B0]">© {new Date().getFullYear()} PackTrack • Packaging proof for every order</footer>
    </div>
  )
}

export default App
