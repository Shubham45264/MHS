import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

// Increase limit for potential attachments or large messages
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('Transporter error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post('/api/enquiry', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Enquiry: ${name} | Maharashtra Hiring Services`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #0B3C5D; border-bottom: 2px solid #F4B400; padding-bottom: 10px;">New Enquiry Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <p><strong>Message / Requirements:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <footer style="margin-top: 30px; font-size: 12px; color: #888;">
          Sent from Maharashtra Hiring Services Contact Form
        </footer>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Enquiry sent successfully' });
  } catch (error) {
    console.error('Error sending enquiry email:', error);
    res.status(500).json({ success: false, message: 'Failed to send enquiry. Please try again later.' });
  }
});

app.post('/api/review', async (req, res) => {
  const { name, rating, comment } = req.body;

  if (!name || !rating || !comment) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const stars = '⭐'.repeat(rating);

  const mailOptions = {
    from: `"${name}" <noreply@maharashtrahiringservices.com>`,
    to: process.env.EMAIL_USER,
    subject: `New Customer Review: ${rating} Stars | ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #0B3C5D; border-bottom: 2px solid #F4B400; padding-bottom: 10px;">New Customer Review</h2>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Rating:</strong> <span style="font-size: 18px;">${stars}</span> (${rating}/5)</p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <p><strong>Review Content:</strong></p>
          <p style="white-space: pre-wrap;">${comment}</p>
        </div>
        <footer style="margin-top: 30px; font-size: 12px; color: #888;">
          Sent from Maharashtra Hiring Services Review Form
        </footer>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Review sent successfully' });
  } catch (error) {
    console.error('Error sending review email:', error);
    res.status(500).json({ success: false, message: 'Failed to send review. Please try again later.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
