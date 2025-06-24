# Contact Form

This project provides a simple Node.js server that serves a basic contact form and sends an email when the form is submitted.

## Setup

1. Install dependencies:
   ```bash
   npm install express nodemailer
   ```

2. Set the following environment variables with your SMTP credentials:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`

3. Start the server:
   ```bash
   node index.js
   ```

The form will be available at `http://localhost:3000/` and will send submissions to `mikkel@onlinemarketing.nu`.
