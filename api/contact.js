import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  console.log('=== API CONTACT ===')
  console.log('SMTP_HOST:', process.env.SMTP_HOST ? 'OK' : 'MANQUANT')

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { name, email, message, honeypot } = req.body

  if (honeypot || !name || !email || !message) {
    return res.status(400).json({ error: 'Champs invalides' })
  }

  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: process.env.MAIL_FROM || process.env.CONTACT_TO,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `Nouveau message depuis le portfolio - ${name}`,
    text: `
Nom : ${name}
Email : ${email}

Message :
${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('MAIL ENVOYÉ')
    res.status(200).json({ success: true })
  } catch (err) {
    console.error('ERREUR:', err.message)
    res.status(500).json({ error: err.message })
  }
}
