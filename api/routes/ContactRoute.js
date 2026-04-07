const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// POST /contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      msg: "All fields are required ❌",
    });
  }

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,     
        pass: process.env.EMAIL_PASS       
      }
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      msg: "Email sent successfully ✅"
    });

  } catch (error) {
    console.error("Mail Error:", error);

    return res.status(500).json({
      success: false,
      msg: "Error sending email ❌"
    });
  }
});

module.exports = router;  