import { motion } from 'framer-motion'
import { Camera, QrCode, ShieldCheck, Gauge, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36">
      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.2),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.2),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.15),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-200"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-sky-300" />
              Verified packaging trail for every order
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Track every pack with video and scan proof
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-5 max-w-xl text-lg text-slate-300"
            >
              A modern warehouse management experience built for trust. Record packing sessions, scan products, and resolve disputes with a tamper-proof trail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-sky-600/30">
                Start free trial
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white">
                <Play className="h-4 w-4" /> Watch demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              <Feature icon={<Camera className="h-4 w-4" />} label="Auto video" />
              <Feature icon={<QrCode className="h-4 w-4" />} label="Scan-first" />
              <Feature icon={<Gauge className="h-4 w-4" />} label="Real-time" />
              <Feature icon={<ShieldCheck className="h-4 w-4" />} label="Audit-ready" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl">
              {/* mock UI */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500" /> Live session
                </div>
                <div className="text-xs text-slate-400">Order #WMS-23918</div>
              </div>

              <div className="grid h-full grid-cols-3">
                <div className="col-span-2 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-white">
                    <div className="h-2 w-2 rounded-full bg-red-500" /> Recording
                  </div>
                </div>
                <div className="col-span-1 border-l border-white/10 bg-slate-950/40 p-3">
                  <div className="mb-2 text-xs font-medium text-slate-300">Scans</div>
                  <div className="space-y-2 overflow-y-auto pr-1 text-xs text-slate-300 max-h-64">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">SKU-{2380 + i}</span>
                          <span className="text-[10px] text-slate-400">OK</span>
                        </div>
                        <div className="mt-1 text-[11px] text-slate-400">Qty 1 • Time {String(9+i).padStart(2,'0')}:32:{String(11+i).padStart(2,'0')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* floating accents */}
            <div className="pointer-events-none absolute -left-20 -top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-20 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-200">
      <div className="text-sky-300">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  )
}
