import { useState } from 'react'
import { Menu, X, Package, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLink = ({ children, href = '#' }) => (
    <a
      href={href}
      className="text-[#B0B0B0] hover:text-white transition-colors"
    >
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#181818]/80 backdrop-blur supports-[backdrop-filter]:bg-[#181818]/60">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-[rgba(255,110,31,0.25)] blur-lg" />
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6E1F] to-[#FF771A] text-white shadow-lg">
                  <Package className="h-5 w-5" />
                </div>
              </div>
              <span className="font-semibold text-white">PackTrack</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how">How it works</NavLink>
              <NavLink href="#showcase">Showcase</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#demo" className="text-[#B0B0B0] hover:text-white">Book demo</a>
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FF6E1F] to-[#FF771A] px-4 py-2 text-white shadow-lg shadow-[rgba(255,110,31,0.28)]"
              >
                <Sparkles className="h-4 w-4 transition-transform group-hover:scale-110" />
                Get started
              </a>
            </div>

            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden rounded-lg border border-white/10 p-2 text-white/90"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              <a href="#features" className="block text-[#B0B0B0]">Features</a>
              <a href="#how" className="block text-[#B0B0B0]">How it works</a>
              <a href="#showcase" className="block text-[#B0B0B0]">Showcase</a>
              <a href="#pricing" className="block text-[#B0B0B0]">Pricing</a>
              <div className="pt-2 flex items-center gap-3">
                <a href="#demo" className="text-[#B0B0B0]">Book demo</a>
                <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FF6E1F] to-[#FF771A] px-3 py-2 text-sm text-white">Get started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
