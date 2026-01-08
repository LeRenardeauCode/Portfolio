require('dotenv').config()
const { sendContactMail } = require('./server/services/mailService')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { name, email, message, honeypot } = req.body

  // validation / honeypot
  if (honeypot || !name || !email || !message) {
    return res.status(400).json({ error: 'Champs invalides' })
  }

  try {
    await sendContactMail({ name, email, message })
    res.status(200).json({ success: true })
  } catch (err) {
    console.error('Erreur /api/contact :', err)
    res.status(500).json({ error: 'Erreur envoi mail' })
  }
}
