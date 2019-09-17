const nodeMailer = require('nodemailer');

export const senderEmail: String = "prooven_support@adeptpros.com";

export const transporter = nodeMailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: senderEmail,
        pass: "Adept@123"
    }
});
