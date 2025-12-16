import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaFigma } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-16">
      <div className="w-full bg-black/80 border-t border-yellow-300/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-6">
          {/* Flèche vers le haut */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            className="relative w-12 h-12 rounded-full bg-neutral-900 border border-yellow-300 flex items-center justify-center text-yellow-300 shadow-[0_0_25px_rgba(250,204,21,0.7)]"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 rounded-full bg-yellow-300/25 blur-lg -z-10" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow-300">
              <path
                d="M12 5V19M12 5L5 12M12 5L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          {/* Icônes sociales cliquables */}
          <div className="flex flex-col items-center gap-3 text-yellow-300">
            <a
              href="https://www.linkedin.com/in/ewan-poiret-027b10203/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <FaLinkedinIn className="w-8 h-8" />
            </a>

            <a
              href="https://github.com/LeRenardeauCode"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>

            <a
              href="https://www.figma.com/files/team/1547145455175141248/user/1547145450756617382?fuid=1547145450756617382"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <FaFigma className="w-8 h-8" />
            </a>
          </div>

          {/* Séparateurs latéraux */}
          <div className="flex items-center justify-between w-full max-w-3xl mt-2">
            <div className="h-0.5 w-32 bg-yellow-300" />
            <div className="h-0.5 w-32 bg-yellow-300" />
          </div>

          {/* Texte bas */}
          <div className="text-center text-[11px] text-gray-400 mt-2 space-y-1">
            <p>Maquette réalisée avec Figma</p>
            <p>© {new Date().getFullYear()} Ewan PORIET. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
