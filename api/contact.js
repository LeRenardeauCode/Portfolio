// api/contact.js (RACINE)
require('dotenv').config()

export default async function handler(req, res) {
  console.log('=== API CONTACT DÉMARRÉ ===')
  console.log('Method:', req.method)
  console.log('Body:', req.body)
  console.log('SMTP_HOST:', process.env.SMTP_HOST ? 'OK' : 'MANQUANT')
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'OK' : 'MANQUANT')
  console.log('CONTACT_TO:', process.env.CONTACT_TO)

  if (req.method !== 'POST') {
    console.log('ERREUR: pas POST')
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { name, email, message, honeypot } = req.body

  if (honeypot || !name || !email || !message) {
    console.log('ERREUR: validation échouée')
    return res.status(400).json({ error: 'Champs invalides' })
  }

  try {
    const transporter = require('nodemailer').createTransporter({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    console.log('Transporter créé')

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.CONTACT_TO,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Contact - ${name}`,
      text: `${name} (${email}) : ${message}`,
    })

    console.log('MAIL ENVOYÉ')
    res.status(200).json({ success: true })
  } catch (err) {
    console.error('ERREUR COMPLETE:', err)
    res.status(500).json({ error: err.message })
  }
}
