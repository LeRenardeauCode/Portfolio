import React from 'react'
import { motion } from 'framer-motion'

const GridBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* fond léger */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />

      {/* grille */}
      <div
        className="absolute inset-10 border border-orange-500/20 rounded-3xl"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(248, 181, 0, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(248, 181, 0, 0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ligne balayage horizontale */}
      <motion.div
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-orange-400/25 to-transparent"
        initial={{ top: '-20%' }}
        animate={{ top: '120%' }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* ligne balayage verticale */}
      <motion.div
        className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent"
        initial={{ left: '110%' }}
        animate={{ left: '-10%' }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      {/* voile sombre */}
      <div className="absolute inset-0 bg-black/70" />
    </div>
  )
}

export default GridBackground
