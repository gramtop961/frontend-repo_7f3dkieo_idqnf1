import { motion } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1661069387738-f959149d8888?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIaWdoLXZvbHVtZSUyMHBhY2tpbmclMjBsaW5lc3xlbnwwfDB8fHwxNzYzNTY5NTEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'High-volume packing lines'
  },
  {
    src: 'https://images.unsplash.com/photo-1661069387738-f959149d8888?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIaWdoLXZvbHVtZSUyMHBhY2tpbmclMjBsaW5lc3xlbnwwfDB8fHwxNzYzNTY5NTEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Barcode and QR validation'
  },
  {
    src: 'https://images.unsplash.com/photo-1661069387738-f959149d8888?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYXJjb2RlJTIwYW5kJTIwUVIlMjB2YWxpZGF0aW9ufGVufDB8MHx8fDE3NjM1Njk1MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Hands-free video capture'
  },
  {
    src: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1600&auto=format&fit=crop',
    caption: 'Secure storage and audit trail'
  },
  {
    src: 'https://images.unsplash.com/photo-1615898613013-b6c4020c82e2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZWN1cmUlMjBzdG9yYWdlJTIwYW5kJTIwYXVkaXQlMjB0cmFpbHxlbnwwfDB8fHwxNzYzNTY5NTE0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Scan-first workflows'
  },
  {
    src: 'https://images.unsplash.com/photo-1762340915700-356b34475448?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTY2FuLWZpcnN0JTIwd29ya2Zsb3dzfGVufDB8MHx8fDE3NjM1Njk1MTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Real-time station dashboards'
  }
]

export default function ImageGallery() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_0%,rgba(255,110,31,0.08),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white sm:text-4xl">See PackTrack in action</motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-3 text-[#B0B0B0]">Real environments, real packing stations, real proof. These visuals reflect typical usage across busy floors.</motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{opacity:0, y:12}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.2 }}
              transition={{duration:0.5, delay:i*0.03}}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#222222]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={img.src} alt={img.caption} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
              <figcaption className="flex items-center justify-between p-4">
                <span className="text-sm text-white">{img.caption}</span>
                <span className="text-[11px] text-[#B0B0B0]">Sample image</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
