const nodemailer = require("nodemailer");
// contraseña de aplicación
require("dotenv").config();

// creamos nuestro transportador

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.G_PASSWORD,
  },
});

module.exports = transporter;