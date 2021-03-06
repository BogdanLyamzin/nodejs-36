const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465, 2255
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: META_PASSWORD
    }
}

const transporter = nodemailer.createTransport(nodemailerConfig);

const mail = {
    to: "nilarir518@goonby.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новое письмо с сайта",
    html: "<p>Новое письмо с сайта</p>"
};

transporter.sendMail(mail)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))