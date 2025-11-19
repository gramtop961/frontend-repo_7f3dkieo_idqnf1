import { motion } from 'framer-motion'
import { Shield, Film, ScanLine, FileSearch } from 'lucide-react'

const items = [
  { icon: <Film className="h-5 w-5" />, title: 'Continuous video', desc: 'Capture every packing session with timestamps.' },
  { icon: <ScanLine className="h-5 w-5" />, title: 'Scan-first', desc: 'Barcode + QR validation with instant feedback.' },
  { icon: <Shield className="h-5 w-5" />, title: 'Tamper-proof', desc: 'Immutable logs with secure retention.' },
  { icon: <FileSearch className="h-5 w-5" />, title: 'Audit trail', desc: 'Searchable evidence per order or SKU.' },
]

export default function ReducedFeatures() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,110,31,0.08),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-3xl font-bold text-white sm:text-4xl">What you get</motion.h2>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-3 text-[#B0B0B0]">Focused, high-impact capabilities that prove what went in the box.</motion.p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{opacity:0, y:15}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.3 }}
              transition={{duration:0.5, delay:i*0.03}}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#222222] p-5 hover:border-[rgba(255,110,31,0.35)]"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-[rgba(255,110,31,0.18)] p-2 text-white">
                  <span className="text-[#FF8A4A]">{it.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{it.title}</h3>
                  <p className="mt-1 text-sm text-[#CCCCCC]">{it.desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[rgba(255,110,31,0.15)] opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
