import { motion } from 'framer-motion'

export default function FlowHighlights() {
  const highlights = [
    { k: 'Proof Links', v: 'Shareable order-level evidence for instant trust' },
    { k: 'Scan-first', v: 'Reduce mis-picks with camera or handheld scanners' },
    { k: 'Secure by default', v: 'Immutable logs, role-based access, retention policies' },
    { k: 'Deploy fast', v: 'Works with webcams; rollout in days, not months' },
  ]
  return (
    <section className="relative py-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_100%,rgba(255,110,31,0.08),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-4 md:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.k}
              initial={{opacity:0, y:10}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.2 }}
              transition={{duration:0.45, delay:i*0.04}}
              className="rounded-2xl border border-white/10 bg-[#222222] p-4"
            >
              <div className="text-[11px] uppercase tracking-wide text-[#B0B0B0]">{h.k}</div>
              <div className="mt-1 text-white">{h.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
