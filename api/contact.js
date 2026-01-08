require('dotenv').config()
const nodemailer = require('nodemailer')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { name, email, message, honeypot } = req.body

  if (honeypot || !name || !email || !message) {
    return res.status(400).json({ error: 'Champs invalides' })
  }

  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
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
    html: `
      <h2>Nouveau message depuis le portfolio</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true })
  } catch (err) {
    console.error('Erreur /api/contact :', err)
    res.status(500).json({ error: 'Erreur envoi mail' })
  }
}
