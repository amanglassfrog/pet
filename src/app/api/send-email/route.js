// server/services/mailService.js
import nodemailer from 'nodemailer';

export const sendMail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};
