import { motion } from 'framer-motion'

export default function FlowBg() {
  const blobs = [
    { size: 380, x: -120, y: -80, opacity: 0.08 },
    { size: 460, x: 320, y: -40, opacity: 0.07 },
    { size: 520, x: -40, y: 240, opacity: 0.06 },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(255,255,255,0.03),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.03),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] mix-blend-overlay opacity-20" />

      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: `calc(50% + ${b.x}px)`,
            top: `calc(40% + ${b.y}px)`,
            background:
              'radial-gradient(circle at 30% 30%, rgba(255, 110, 31, 0.8), rgba(255, 119, 26, 0.45) 40%, rgba(255, 119, 26, 0.15) 60%, transparent 70%)',
            filter: 'blur(30px)',
            opacity: b.opacity,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 30 : -30, 0],
            y: [0, i % 2 === 0 ? -25 : 25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 16 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-[-20%] h-[40%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,110,31,0.25),transparent_60%)]" />
    </div>
  )
}
