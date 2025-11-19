import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  { name: 'Starter', price: '$0', tagline: 'Record up to 200 orders/month', features: ['1 station', 'Basic video capture', 'Barcode scanning', 'Email support'] },
  { name: 'Growth', price: '$199', tagline: 'Scale with your operations', features: ['Up to 5 stations', 'HD video & snapshots', 'Priority support', 'Shopify/Woo integrations'] },
  { name: 'Enterprise', price: 'Let’s talk', tagline: 'For 6+ stations & SLAs', features: ['Unlimited stations', 'SAML/SSO', 'On-prem or VPC', 'Custom retention & exports'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white sm:text-4xl">Simple pricing</motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-3 text-slate-300">Start free, upgrade when you’re ready.</motion.p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{opacity:0, y:15}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.3 }}
              transition={{duration:0.5, delay:i*0.05}}
              className={`relative rounded-2xl border border-white/10 p-6 ${i===1 ? 'bg-gradient-to-b from-white/10 to-white/5' : 'bg-white/5'}`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-300">{t.name}</div>
                  <div className="mt-1 text-3xl font-bold text-white">{t.price}</div>
                  <div className="mt-1 text-sm text-slate-400">{t.tagline}</div>
                </div>
                {i===1 && <div className="rounded-full bg-sky-600/20 px-2 py-1 text-xs text-sky-300">Popular</div>}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2"><Check className="h-4 w-4 text-sky-400" />{f}</li>
                ))}
              </ul>

              <a href="#get-started" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium text-white ${i===1 ? 'bg-gradient-to-r from-sky-600 to-indigo-600' : 'bg-white/10 border border-white/10'}`}>Select</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
