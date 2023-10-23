const nodemailer = require("nodemailer");
require("dotenv").config();
const ejs = require("ejs");
const mailServiceObj = {}

const mailerTransporter = (subject, email, data) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  return transporter;
}

//Function to send verficiation mail to user
mailServiceObj.sendInvitationEmail = async (email, emailPayload) => {
  try {
    const { verificationCode, name, adminName } = emailPayload
    const ejsFileDetails = await ejs.renderFile(process.cwd() + "/templates/invitation.ejs", { name, verificationCode, adminName });

    const transporter = await mailerTransporter();
    const mainOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'You have been invited!',
      html: ejsFileDetails
    };

    await transporter.sendMail(mainOptions);
    return true;
  } catch (error) {
    console.log("Failed to send invitation email");
    throw error;
  }
}

module.exports = mailServiceObj