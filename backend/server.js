import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Enquiry from Website",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
