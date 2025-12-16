import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { sendContact } from '../services/api'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const [form, setForm] = useState({ name: '', email: '', message: '', honeypot: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    try {
      await sendContact(form)
      setStatus({ loading: false, success: 'Message envoyé avec succès !', error: null })
      setForm({ name: '', email: '', message: '', honeypot: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Erreur serveur' })
    }
  }

  return (
    <section id="contact" ref={ref} className="relative min-h-screen px-6 py-24 scroll-mt-24">
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Titre */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4 inline-block relative">
            <span className="relative z-10">CONTACTEZ-MOI</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-yellow-300/70 -z-10"></span>
          </h2>
        </motion.div>

        {/* Layout 2 colonnes */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 items-start"
        >
          {/* COLONNE GAUCHE : cadre photo style “dossier” */}
          <div className="flex justify-center">
            <div className="relative w-[230px] sm:w-[260px] h-[340px] sm:h-[380px]">
              {/* carte du fond */}
              <div className="absolute inset-0 rounded-3xl bg-yellow-300/35 blur-xl" />
              <motion.div
                className="absolute inset-0 rounded-3xl bg-yellow-300/90"
                style={{ transform: 'rotate(-6deg)' }}
              />
              {/* carte intermédiaire */}
              <motion.div
                className="absolute inset-2 rounded-3xl bg-orange-400"
                style={{ transform: 'rotate(3deg)' }}
              />
              {/* carte principale avec photo */}
              <motion.div
                className="absolute inset-4 rounded-3xl overflow-hidden"
                style={{ transform: 'rotate(-6deg)' }}
                whileHover={{ scale: 1.02, y: -4, transform: 'rotate(0deg)' }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src="/assets/IMG_0887.jpeg"
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* COLONNE DROITE : formulaire */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Honeypot caché */}
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                className="hidden"
                autoComplete="off"
              />

              {/* Nom */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-gray-200">
                  <span>
                    <img
                      src="/assets/logos/icon-user.svg"
                      className="relative z-10 w-10 h-10 sm:w-8 sm:h-8 object-fit"
                    />
                  </span>
                  <span>Nom et Prénom</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-md bg-neutral-900/80 border border-gray-600/60 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-gray-200">
                  <span>
                    <img
                      src="/assets/logos/icon-mail.svg"
                      className="relative z-10 w-10 h-10 sm:w-8 sm:h-8 object-fit"
                    />
                  </span>
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md bg-neutral-900/80 border border-gray-600/60 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm text-gray-200">
                  <span>
                    <img
                      src="/assets/logos/icon-message.svg"
                      className="relative z-10 w-10 h-10 sm:w-8 sm:h-8 object-fit"
                    />
                  </span>
                  <span>Message</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-md bg-neutral-900/80 border border-gray-600/60 px-3 py-2 text-sm text-gray-100 resize-none focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300"
                  required
                />
              </div>

              {/* Statut */}
              {status.error && <p className="text-sm text-red-400">{status.error}</p>}
              {status.success && <p className="text-sm text-emerald-300">{status.success}</p>}

              {/* Bouton */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex items-center justify-center px-8 py-2.5 rounded-md bg-yellow-300 text-black font-medium text-sm hover:bg-orange-400 hover:text-black transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.loading ? 'Envoi...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* séparateurs */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
      </motion.div>
    </section>
  )
}

export default Contact
