/* eslint-disable max-len */
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  try {
    const {name, email, phone, description} = req.body;

    // Konfigurasi transporter untuk nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });

    // Konfigurasi pesan email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'your-destination-email@example.com',
      subject: 'Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
