const nodemailer = require('nodemailer');

const Send_Mail = async (receiver, cc, subject, body) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        }
    });

    mailOptions = {
        from: "Furnishi < " + process.env.MAIL_USERNAME + " >",
        subject: subject,
        to: "pratikwadke2002@gmail.com",
        text: body,
    }
    if (cc) mailOptions.cc = cc;
    try {
        let info = await transporter.sendMail(mailOptions);
        if (info) {
            return true;
        }
    } catch (err) {
        console.log(err);
        return false
    }

}

module.exports = { Send_Mail }