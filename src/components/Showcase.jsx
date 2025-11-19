import { motion } from 'framer-motion'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/53/Walmart_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8e/Shopify_Logo_%282018%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/0f/Best_Buy_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/1b/Target_logo.svg',
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-6 overflow-hidden">
            <motion.div
              className="flex items-center gap-10 min-w-full"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...logos, ...logos].map((src, i) => (
                <img key={i} src={src} className="h-8 opacity-70" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
