import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(255,110,31,0.12),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{opacity:0, y:10}}
          whileInView={{opacity:1, y:0}}
          viewport={{ once: true }}
          transition={{duration:0.6}}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#222222] to-[#282828] p-8 sm:p-12"
        >
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[rgba(255,110,31,0.25)] blur-3xl" />
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[rgba(255,119,26,0.25)] blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">Ready to track every package with confidence?</h3>
              <p className="mt-2 text-white/90">Start your free pilot and see how video + scanning reduces errors and chargebacks in days.</p>
            </div>
            <div className="md:justify-self-end">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 font-medium text-white backdrop-blur border border-white/10 mr-3">Book demo</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6E1F] to-[#FF771A] px-5 py-3 font-medium text-white shadow-lg shadow-[rgba(255,110,31,0.28)]">
                Get started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
