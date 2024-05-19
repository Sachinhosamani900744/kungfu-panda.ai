const express = require('express');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Replace with your SendGrid API key obtained from your account dashboard
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.post('/api/submit-form', (req, res) => {
  const { name, email, message } = req.body; // Extract data from request body

  const msg = {
    to: 'your_email@example.com', // Replace with your desired recipient email
    from: 'form@yourdomain.com', // Replace with a dedicated email address for the form
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent successfully');
      res.json({ message: 'Email submitted successfully!' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
