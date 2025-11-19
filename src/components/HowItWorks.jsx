import { motion } from 'framer-motion'
import { Camera, ScanLine, CloudUpload, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: <Camera className="h-5 w-5" />,
    title: 'Start session',
    desc: 'Open an order and the camera begins secure recording instantly.'
  },
  {
    icon: <ScanLine className="h-5 w-5" />,
    title: 'Scan items',
    desc: 'Scan SKUs, serials, or barcodes. We validate counts in real-time.'
  },
  {
    icon: <CloudUpload className="h-5 w-5" />,
    title: 'Auto save',
    desc: 'Video and scans are uploaded and linked to the order for life.'
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: 'Share proof',
    desc: 'Send a secure link if there is a dispute—evidence ends the back-and-forth.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white sm:text-4xl">How it works</motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-3 text-[#B0B0B0]">From scan to ship in four simple steps.</motion.p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{opacity:0, y:15}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, amount: 0.3 }}
              transition={{duration:0.5, delay:i*0.05}}
              className="relative rounded-2xl border border-white/10 bg-[#222222] p-6"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-[rgba(255,110,31,0.18)] px-2 py-1 text-white">
                <span className="text-[#FF8A4A]">{s.icon}</span>
                <span className="text-xs text-[#FFFFFF]">Step {i+1}</span>
              </div>
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-[#CCCCCC]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
