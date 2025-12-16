// services/mailService.js
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

transporter.verify((err) => {
  if (err) {
    console.error('Erreur SMTP :', err)
  } else {
    console.log('SMTP prêt à envoyer des mails.')
  }
})

async function sendContactMail({ name, email, message }) {
  const from = process.env.MAIL_FROM || process.env.CONTACT_TO

  const mailOptions = {
    from,
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

  return transporter.sendMail(mailOptions)
}

module.exports = { sendContactMail }
