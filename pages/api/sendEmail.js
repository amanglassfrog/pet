import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, mobile, products, message } = req.body;

    // Create a transporter using your email service (like Gmail)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
         host: "smtp-mail.gmail.com",
        port: 587,
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
      // Optional: add logger and debug for better debugging in production
      logger: true, // Enables logging
      debug: true, // Show debug output
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECEIVER_EMAIL, // Your email or receiver address
      subject: `Enquiry from ${name}`, // Email subject
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Products: ${products.join(", ")}
        Message: ${message}
      `,
    };

    try {
      // Validate email format (optional, but recommended)
      if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error); // Log the error for debugging
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']); // Specify allowed methods
    res.status(405).json({ message: 'Method not allowed' });
  }
}
