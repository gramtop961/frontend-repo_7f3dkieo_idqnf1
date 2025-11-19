import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    title: '3PL cuts chargebacks by 62%',
    summary: 'A regional 3PL introduced scan-first packing with continuous video evidence across 4 stations.',
    metrics: ['-62% chargebacks', '+28% pick/pack throughput', '2-week rollout'],
    logo: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'DTC brand improves trust',
    summary: 'High AOV home goods brand reduced WISMO tickets by sharing order-level proof links.',
    metrics: ['-37% WISMO tickets', '+14 NPS', 'Same-day dispute resolution'],
    logo: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function CaseStudies() {
  return (
    <section id="stories" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white sm:text-4xl">Stories from the floor</motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-3 text-[#B0B0B0]">Proof over promises. Here’s how teams use PackTrack to deliver with confidence.</motion.p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <motion.article
              key={i}
              initial={{opacity:0, y:14}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.25 }}
              transition={{duration:0.5, delay:i*0.05}}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#222222]"
            >
              <div className="relative aspect-[16/7] w-full overflow-hidden">
                <img src={c.logo} alt="case" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-[#CCCCCC]">{c.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.metrics.map((m, j) => (
                    <li key={j} className="rounded-full border border-white/10 bg-[#181818] px-3 py-1 text-xs text-white/90">{m}</li>
                  ))}
                </ul>
                <a href="#demo" className="mt-5 inline-flex items-center gap-2 text-[#FFB589] hover:text-white">
                  Read full story <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
