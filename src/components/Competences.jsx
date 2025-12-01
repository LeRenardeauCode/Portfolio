import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import LearningDot from './LearningDot'

const CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'from-yellow-300 to-orange-400',
    skills: [
      { name: 'HTML5', logo: '/assets/logos/html5.svg' },
      { name: 'CSS3', logo: '/assets/logos/css3.svg' },
      { name: 'JavaScript', logo: '/assets/logos/js.svg' },
      { name: 'React', logo: '/assets/logos/react.svg' },
      { name: 'TypeScript', logo: '/assets/logos/typescript.svg' },
      { name: 'Tailwind CSS', logo: '/assets/logos/tailwind.svg' },
      { name: 'MUI', logo: '/assets/logos/mui.svg' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'from-orange-400 to-amber-500',
    skills: [
      { name: 'Node.js', logo: '/assets/logos/nodejs.svg' },
      { name: 'Express', logo: '/assets/logos/express.svg' },
      { name: 'MySQL', logo: '/assets/logos/mysql.svg' },
      { name: 'MongoDB', logo: '/assets/logos/mongodb.svg' },
      { name: 'PostgreSQL', logo: '/assets/logos/postgresql.svg' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    color: 'from-amber-400 to-yellow-500',
    skills: [
      { name: 'Docker', logo: '/assets/logos/docker.svg', learning: true },
      { name: 'Git', logo: '/assets/logos/git.svg' },
      { name: 'GitHub Actions', logo: '/assets/logos/github-actions.svg' },
    ],
  },
  {
    id: 'system',
    label: 'Systèmes',
    color: 'from-yellow-300 to-orange-400',
    skills: [
      { name: 'Linux', logo: '/assets/logos/linux.svg', learning: true },
      { name: 'Windows Server', logo: '/assets/logos/windows.svg' },
      { name: 'VirtualBox', logo: '/assets/logos/virtualbox.svg' },
    ],
  },
  {
    id: 'network',
    label: 'Réseaux',
    color: 'from-orange-400 to-amber-500',
    skills: [
      { name: 'TCP/IP', logo: '/assets/logos/network.svg' },
      { name: 'VPN', logo: '/assets/logos/vpn.svg' },
    ],
  },
  {
    id: 'security',
    label: 'Cybersécurité',
    color: 'from-yellow-300 to-orange-500',
    skills: [
      { name: 'OWASP', logo: '/assets/logos/owasp.svg', learning: true },
      { name: 'Burp Suite', logo: '/assets/logos/burp.svg', learning: true },
      { name: 'Nmap', logo: '/assets/logos/nmap.svg', learning: true },
    ],
  },
]

const Competences = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [activeCategory, setActiveCategory] = useState('frontend')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const currentCategory = CATEGORIES.find((c) => c.id === activeCategory)

  return (
    <section id="competences" ref={ref} className="relative min-h-screen px-6 py-28 scroll-mt-24">
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        exit="hidden"
      >
        {/* Titre */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4 inline-block relative">
            <span className="relative z-10">MES COMPÉTENCES</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-yellow-300/70 -z-10"></span>
          </h2>
        </motion.div>

        {/* Layout principal : cadre + panneau de droite */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 items-center"
        >
          {/* Cadre incliné néon avec boutons */}
          <div className="relative w-full h-[360px] sm:h-[420px]">
            {/* Glow néon */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500 opacity-60 blur-xl"
              aria-hidden="true"
            />

            {/* Cadre principal incliné */}
            <div className="relative w-full h-full rounded-3xl bg-neutral-900/90 border border-orange-400/60 shadow-[0_0_40px_rgba(251,146,60,0.6)] transform -rotate-3 overflow-visible">
              {/* Bordure intérieure */}
              <div className="absolute inset-3 rounded-2xl border border-orange-300/30 pointer-events-none" />

              <div className="relative w-full h-full p-6">
                {/* TOP : Frontend + Backend centrés */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex gap-4">
                  <CategoryButton
                    category={CATEGORIES.find((c) => c.id === 'frontend')}
                    active={activeCategory === 'frontend'}
                    onClick={() => setActiveCategory('frontend')}
                  />
                  <CategoryButton
                    category={CATEGORIES.find((c) => c.id === 'backend')}
                    active={activeCategory === 'backend'}
                    onClick={() => setActiveCategory('backend')}
                  />
                </div>

                {/* BOTTOM : Réseaux + Cybersécurité centrés */}
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-4">
                  <CategoryButton
                    category={CATEGORIES.find((c) => c.id === 'network')}
                    active={activeCategory === 'network'}
                    onClick={() => setActiveCategory('network')}
                  />
                  <CategoryButton
                    category={CATEGORIES.find((c) => c.id === 'security')}
                    active={activeCategory === 'security'}
                    onClick={() => setActiveCategory('security')}
                  />
                </div>

                {/* LEFT : DevOps centré verticalement */}
                <div className="absolute left-[-16px] top-1/2 -translate-y-1/2">
                  <CategoryButton
                    category={CATEGORIES.find((c) => c.id === 'devops')}
                    active={activeCategory === 'devops'}
                    onClick={() => setActiveCategory('devops')}
                    orientation="vertical"
                  />
                </div>

                {/* RIGHT : Systèmes centré verticalement */}
                <div className="absolute right-[-16px] top-1/2 -translate-y-1/2">
                  <CategoryButton
                    category={CATEGORIES.find((c) => c.id === 'system')}
                    active={activeCategory === 'system'}
                    onClick={() => setActiveCategory('system')}
                    orientation="vertical"
                  />
                </div>

                {/* Contenu central du cadre */}
                <div className="w-full h-full flex flex-col items-center justify-center text-center px-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-orange-300/70 mb-2">
                    SÉLECTIONNEZ UN DOMAINE
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-heading text-white mb-3">
                    {currentCategory?.label}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300/80 max-w-md">
                    Chaque domaine reflète un ensemble de compétences techniques mises en pratique
                    sur des projets concrets, du développement d&apos;interfaces au renforcement de
                    la sécurité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Panneau de droite : logos + texte qui changent */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-yellow-300/10 via-orange-500/5 to-yellow-300/10 blur-xl pointer-events-none" />
            <div className="relative rounded-3xl bg-neutral-900/80 border border-orange-400/40 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory?.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <h4 className="text-xl sm:text-2xl font-heading text-white mb-4">
                    Stack & outils
                  </h4>

                  <p className="text-gray-300 text-sm sm:text-base mb-6">
                    Voici les technologies et outils que j&apos;utilise pour le domaine&nbsp;:&nbsp;
                    <span className="text-orange-300 font-semibold">{currentCategory?.label}</span>.
                  </p>

                  {/* Logos */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {currentCategory?.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-800/80 border border-orange-300/30"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {skill.logo ? (
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-6 h-6 object-contain"
                          />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400" />
                        )}
                        <span className="text-sm text-gray-100">{skill.name}</span>

                        {skill.learning && (
                          <div className="ml-1">
                            <LearningDot label="" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Ligne décorative */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent my-4" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Lignes décoratives globales */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      </motion.div>
    </section>
  )
}

const CategoryButton = ({ category, active, onClick, orientation = 'horizontal' }) => {
  const baseClasses =
    'cursor-pointer inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-medium shadow-md transition-all duration-200 border'

  const activeClasses =
    'border-orange-300 text-black bg-gradient-to-r ' +
    category.color +
    ' shadow-[0_0_20px_rgba(251,146,60,0.8)]'

  const inactiveClasses =
    'border-orange-300/40 text-orange-200/80 bg-neutral-900/90 hover:bg-neutral-800'

  const rotation = orientation === 'vertical' ? ' -rotate-90 sm:rotate-0' : ''

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={baseClasses + ' ' + (active ? activeClasses : inactiveClasses) + rotation}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {category.label}
    </motion.button>
  )
}

CategoryButton.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string,
      })
    ),
  }).isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
}

export default Competences
