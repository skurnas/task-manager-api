const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

console.log(process.env.PORT)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SG_EMAIL,
        subject: 'Welcome',
        text: `welcome to the app, ${name}, lemme know how you like it`

    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SG_EMAIL,
        subject: 'Welcome',
        text: `welcome to the app, ${name}, lemme know how you like it`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}