import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import LearningDot from './LearningDot'

const FORMATIONS = [
  {
    id: 'dwwm',
    title: 'Titre Professionnel DWWM',
    school: 'Centre de Formation ForEach Academy',
    period: '2025 - 2026',
    status: 'in_progress', // 'done' | 'in_progress'
    image: '/assets/banniere foreach .png', // à adapter
    description:
      "Formation Développeur Web et Web Mobile, axée sur la conception, le développement et la sécurisation d'applications web modernes.",
  },
  {
    id: 'ecolepolice',
    title: 'École de Police Nationale - Roubaix',
    school: 'École de Police',
    period: '2019',
    status: 'done', // 'done' | 'in_progress'
    image: '/assets/banniere ecole police.png', // à adapter
    description:
      "Formation à l'école de police nationale à Roubaix axée sur la sécurité, le maintien de l'ordre, l'administration, les interventions, le cadre légal et la gestion du stress",
  },
  {
    id: 'bac',
    title: 'Baccalauréat Technologique STMG',
    school: 'Lycée Polyvalent Artois',
    period: '2016',
    status: 'done',
    image: '/assets/Banniere stmg.png', // à adapter
    description: 'Parcours orienté gestion, management et ressources humaines',
  },
]

const CERTIFICATIONS = [
  {
    id: 'thm',
    title: 'TryHackMe - Learning Path',
    shortTitle: 'TryHackMe - Learning Path : Cyber Security 101',
    issuer: 'TryHackMe',
    period: 'En cours',
    status: 'in_progress',
    logo: '/assets/logos/tryhackme.svg',
  },
  {
    id: 'comptia',
    title: 'CompTIA - Security+',
    shortTitle: 'CompTIA - Security+',
    issuer: 'CompTIA',
    period: 'En cours',
    status: 'in_progress',
    logo: '/assets/logos/security+.svg',
  },
  {
    id: 'linux',
    title: 'Linux Administrator',
    shortTitle: 'Linux LPIC-1',
    issuer: 'Plateforme en ligne',
    period: 'En cours',
    status: 'in_progress',
    logo: '/assets/logos/linux.svg',
  },
  {
    id: 'pre-security',
    title: 'Pre-Security THM',
    shortTitle: 'Pre Security TryHackMe',
    issuer: 'Plateforme en ligne',
    period: 'Obtenu',
    status: 'done',
    logo: '/assets/logos/tryhackme.svg',
  },
  {
    id: 'initcyber',
    title: 'Initiation Cybersecurite',
    shortTitle: 'Formations initiatrices à la cybercriminalité',
    issuer: 'Plateforme en ligne',
    period: 'Obtenu',
    status: 'done',
    logo: '/assets/logos/cybersecu.svg',
  },
]

const Formations = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.12,
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

  return (
    <section id="formations" ref={ref} className="relative min-h-screen px-6 py-28 scroll-mt-24">
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Titre */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4 inline-block relative">
            <span className="relative z-10">MES FORMATIONS</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-yellow-300/70 -z-10"></span>
          </h2>
        </motion.div>

        {/* Layout : timeline + colonne certifs */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] gap-10 items-start"
        >
          {/* TIMELINE FORMATIONS */}
          <div className="relative">
            <div className="space-y-12">
              {FORMATIONS.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  variants={itemVariants}
                  className="relative sm:pl-16"
                >
                  {/* Date + learningDot au-dessus */}
                  <div className="mb-3 flex items-center gap-3 sm:gap-4 sm:ml-16">
                    <span className="text-sm sm:text-base text-orange-200 tracking-[0.18em] uppercase">
                      {formation.period}
                    </span>
                    {formation.status === 'in_progress' && (
                      <span className="mt-[2px]">
                        <LearningDot label="" />
                      </span>
                    )}
                  </div>

                  {/* Point sur la barre verticale (quinconce) */}
                  <div className="hidden sm:block absolute left-[18px] top-8">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-orange-400" />
                      <div className="absolute inset-0 rounded-full border border-orange-300/60 scale-150" />
                    </div>
                  </div>

                  {/* Card glassmorphism inclinée */}
                  <motion.div
                    className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_25px_rgba(0,0,0,0.6)] overflow-hidden
                    ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                    whileHover={{ translateY: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Bande lumineuse haut */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 opacity-80" />

                    {/* Image diplôme */}
                    {formation.image && (
                      <div className="h-32 sm:h-40 w-full overflow-hidden">
                        <img
                          src={formation.image}
                          alt={formation.title}
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                    )}

                    {/* Contenu */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-heading text-white mb-1">
                        {formation.title}
                      </h3>
                      <p className="text-sm text-orange-200/80 mb-3">{formation.school}</p>
                      <p className="text-sm sm:text-base text-gray-200/80 leading-relaxed">
                        {formation.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLONNE CERTIFICATIONS */}
          <div className="relative">
            {/* Barre séparatrice verticale pleine hauteur */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0">
              <div className="w-[3px] h-full bg-gradient-to-b from-yellow-400 via-orange-400 to-yellow-400 rounded-full shadow-[0_0_20px_rgba(251,146,60,0.7)]" />
            </div>

            <div className="lg:pl-10">
              <h3 className="text-lg sm:text-xl font-heading text-white mb-6 flex items-center gap-2">
                Certifications
              </h3>

              {/* Une ligne = un cercle + infos alignées */}
              <div className="flex flex-col gap-6">
                {CERTIFICATIONS.map((cert) => (
                  <motion.div
                    key={cert.id}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* CERCLE */}
                    <motion.div
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-yellow-300/40 bg-neutral-900/80 backdrop-blur-lg shadow-[0_0_20px_rgba(250,204,21,0.4)] flex items-center justify-center overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Logo SEUL dans le cercle */}
                      {cert.logo && (
                        <img
                          src={cert.logo}
                          className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 object-fit"
                        />
                      )}

                      {/* Tooltip au hover */}
                      <div className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="rounded-2xl bg-neutral-950/95 border border-yellow-300/40 px-3 py-2 shadow-lg max-w-xs">
                          <p className="text-xs text-gray-100 font-medium mb-1">{cert.title}</p>
                          <p className="text-[10px] text-gray-400">
                            {cert.issuer} • {cert.period}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* INFOS ALIGNÉES AU CENTRE DU CERCLE */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-orange-200/80 uppercase tracking-wide">
                          {cert.period}
                        </span>
                        {cert.status === 'in_progress' && (
                          <span className="mt-[1px]">
                            <LearningDot label="" />
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-100">{cert.shortTitle}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* séparateurs haut/bas */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      </motion.div>
    </section>
  )
}

export default Formations
