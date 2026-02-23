import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ---------------- MIDDLEWARE ----------------
app.use(express.json({ limit: "10mb" }));

// CORS for your Vercel domain
app.use(cors({
  origin: [
    "https://www.maharshtrahiringservices.com",
    "https://maharshtrahiringservices.com"
  ],
  methods: ["GET", "POST"],
}));

// ---------------- EMAIL CONFIG ----------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter
transporter.verify((error) => {
  if (error) {
    console.error("Email transporter error:", error);
  } else {
    console.log("Email server ready");
  }
});

// ---------------- HEALTH CHECK ----------------
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// ---------------- ENQUIRY API ----------------
app.post("/api/enquiry", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Enquiry - ${name}`,
      html: `
        <div style="font-family: Arial;">
          <h2>New Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: "Enquiry sent successfully" });
  } catch (error) {
    console.error("Enquiry error:", error);
    res.status(500).json({ success: false, message: "Failed to send enquiry" });
  }
});

// ---------------- REVIEW API ----------------
app.post("/api/review", async (req, res) => {
  const { name, rating, comment } = req.body;

  if (!name || !rating || !comment) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const stars = "⭐".repeat(Number(rating));

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Review - ${rating} Stars`,
      html: `
        <div style="font-family: Arial;">
          <h2>New Customer Review</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Rating:</strong> ${stars}</p>
          <p><strong>Comment:</strong></p>
          <p>${comment}</p>
        </div>
      `,
    });

    res.status(200).json({ success: true, message: "Review sent successfully" });
  } catch (error) {
    console.error("Review error:", error);
    res.status(500).json({ success: false, message: "Failed to send review" });
  }
});

// ---------------- START SERVER ----------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
