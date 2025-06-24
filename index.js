const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/submit', async (req, res) => {
  const { name, email, number, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  let mailOptions = {
    from: email,
    to: 'mikkel@onlinemarketing.nu',
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Thank you for your submission!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error sending email.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
