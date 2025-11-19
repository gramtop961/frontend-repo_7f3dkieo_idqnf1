import { useState } from 'react'
import { Menu, X, Package, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLink = ({ children, href = '#' }) => (
    <a
      href={href}
      className="text-slate-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-blue-500/20 blur-lg" />
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
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
              <a href="#demo" className="text-slate-300 hover:text-white">Book demo</a>
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-lg shadow-blue-600/20"
              >
                <Sparkles className="h-4 w-4 transition-transform group-hover:scale-110" />
                Get started
              </a>
            </div>

            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden rounded-lg border border-white/10 p-2 text-slate-200"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              <a href="#features" className="block text-slate-300">Features</a>
              <a href="#how" className="block text-slate-300">How it works</a>
              <a href="#showcase" className="block text-slate-300">Showcase</a>
              <a href="#pricing" className="block text-slate-300">Pricing</a>
              <div className="pt-2 flex items-center gap-3">
                <a href="#demo" className="text-slate-300">Book demo</a>
                <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-sm text-white">Get started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
