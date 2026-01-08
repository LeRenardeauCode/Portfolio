require('dotenv').config()
const nodemailer = require('nodemailer')

export default async function handler(req, res) {
  console.log('API appelée')

  if (req.method !== 'POST') return res.status(405).end()

  const body = req.body
  console.log('Body reçu :', body)

  const { name, email, message, honeypot } = body

  if (honeypot || !name || !email || !message) {
    return res.status(400).json({ error: 'Données invalides' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.MAIL_FROM || 'test@resend.dev',
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `Contact - ${name}`,
    text: `${name} (${email}) : ${message}`,
  })

  res.status(200).json({ success: true })
}
