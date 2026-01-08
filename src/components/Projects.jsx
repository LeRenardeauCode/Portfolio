import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PropTypes from 'prop-types'

import yugiohImg from '../images/yugioh card.jpeg'
import lolImg from '../images/lol card.jpg'
import motusImg from '../images/motus card.jpg'
import portfolioImg from '../images/portfolioImg.png'
import poleevolutionImg from '../images/pole evolution accueil.png'
import LearningDot from './LearningDot'

const projectsData = [
  {
    id: 1,
    title: 'Projet Scolaire - Yu-Gi-Oh Full-Stack',
    description:
      'Application full-stack avec React, Node.js et MySQL pour gérer une base de données de cartes Yu-Gi-Oh.',
    image: yugiohImg,
    githubLink: 'https://github.com/LeRenardeauCode/YuGiOhTCG',
  },
  {
    id: 2,
    title: 'Portfolio Personnel',
    description: 'Site portfolio moderne avec React, Tailwind CSS et animations Framer Motion.',
    image: portfolioImg,
    githubLink: 'https://github.com/LeRenardeauCode/Portfolio',
  },
  {
    id: 3,
    title: 'Projet Scolaire - LoLAPP Front-End',
    description:
      'Projet Front-End avec récupération de données via URL externes de Data Dragon - API officiel de Riot',
    image: lolImg,
    githubLink: 'https://github.com/LeRenardeauCode/LoLAPI',
  },
  {
    id: 4,
    title: 'Projet Scolaire - Jeu MOTUS JS Vanilla',
    description:
      'Premier projet réalisé sur la mise en application du jeu MOTUS avec JavaScript Vanilla et la gestion du DOM.',
    image: motusImg,
    githubLink: 'https://github.com/LeRenardeauCode/Motus-projet',
  },
  {
    id: 5,
    title: 'Site Web Full-stack - Ecole de Pole Dance (En cours)',
    description:
      'Premier projet professionnel sur la création du site web Full-Stack de Pole Evolution',
    image: poleevolutionImg,
    githubLink: 'https://github.com/ton-username/projet5',
    inProgress: true,
  },
]

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden cursor-pointer h-64 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center">
            <span className="text-neutral-600 text-sm">Image du projet</span>
          </div>
        )}
      </div>

      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: isHovered ? 0.7 : 0.3 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative h-full flex flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <motion.h3
            className="text-xl font-semibold text-white"
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {project.inProgress && <LearningDot label="" />}

          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300"
            animate={{
              scale: isHovered ? 1.4 : 1,
              color: isHovered ? '#fb923c' : '#fde047',
            }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
          className="space-y-4"
        >
          <p className="text-gray-300 text-sm">{project.description}</p>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-yellow-300 hover:bg-orange-400 text-black font-medium rounded-md transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Voir plus
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    githubLink: PropTypes.string.isRequired,
    inProgress: PropTypes.bool,
  }).isRequired,
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

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

  return (
    <section id="projets" ref={ref} className="relative min-h-screen px-6 py-20 scroll-mt-24">
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4 inline-block relative">
            <span className="relative z-10">MES PROJETS</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-yellow-300/70 -z-10"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <a
            href="/path-to-your-cv.pdf"
            download
            className="text-2xl font-body inline-block px-8 py-4 bg-neutral-900 hover:bg-orange-400 text-yellow-300 hover:text-black font-bold rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Télécharger mon CV
          </a>
        </motion.div>

        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      </motion.div>
    </section>
  )
}

export default Projects
