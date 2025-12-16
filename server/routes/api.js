// routes/api.js
const express = require('express')
const rateLimit = require('express-rate-limit')
const { sendContactMail } = require('../services/mailService')

const router = express.Router()

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Trop de tentatives, réessayez plus tard.' },
})

router.post('/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message, honeypot } = req.body

    if (honeypot) {
      return res.status(400).json({ error: 'Spam détecté.' })
    }
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Tous les champs sont obligatoires.' })
    }
    if (name.length > 100 || email.length > 150 || message.length > 2000) {
      return res.status(400).json({ error: 'Entrées trop longues.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email invalide.' })
    }

    await sendContactMail({ name, email, message })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Erreur /api/contact :', err)
    return res.status(500).json({ error: 'Erreur serveur, réessayez plus tard.' })
  }
})

module.exports = router
