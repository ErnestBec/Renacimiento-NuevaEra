const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
const pug = require("pug");
const { htmlToText } = require("html-to-text");

dotenv.config({ path: "./config.env" });
class Email {
  constructor(to) {
    this.to = to;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      return nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: "apikey",
          pass: process.env.SENGRID_API_KEY,
        },
      });
    }
    return nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
  }

  //Send the actual mail

  async send(templeate, subject, userName, products, totalPrice) {
    const html = pug.renderFile(
      path.join(__dirname, "..", "views", "emails", `${templeate}.pug`),
      {
        userName,
        products,
        totalPrice,
      }
    );
    await this.newTransport().sendMail({
      from: process.env.MAIL_FROM,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    });
  }
  async sendWelcome(userName) {
    await this.send(
      "welcome",
      `Hi ${userName} Welcome to the Academlo store!, The best products at your fingertips`,
      userName
    );
  }
  async sendPurchase(userName, products, totalPrice) {
    await this.send(
      "purchase",
      `Hi ${userName} did you make the following purchase:`,
      userName,
      products,
      totalPrice
    );
  }
}

module.exports = { Email };
