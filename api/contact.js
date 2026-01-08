import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  console.log('API appelée')

  if (req.method !== 'POST') return res.status(405).end()

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

  await transporter.sendMail({
    from: process.env.MAIL_FROM || process.env.CONTACT_TO,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `Portfolio - ${name}`,
    text: `${name} (${email}) :\n${message}`,
  })

  res.json({ success: true })
}
