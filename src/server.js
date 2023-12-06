/* eslint-disable max-len */
import express from 'express';
import {createTransport} from 'nodemailer';
import {urlencoded, json} from 'body-parser';

const app = express();
const port = 3001;

app.use(urlencoded({extended: true}));
app.use(json());

app.post('/send-email', async (req, res) => {
  try {
    const {name, email, phone, description} = req.body;

    // Konfigurasi transporter untuk nodemailer
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'email@gmail.com',
        pass: 'email-password',
      },
    });

    // Konfigurasi pesan email
    const mailOptions = {
      from: 'email@gmail.com',
      to: 'destination-email@example.com',
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
