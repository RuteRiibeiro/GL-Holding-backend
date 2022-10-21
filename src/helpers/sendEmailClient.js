const transporter = require('nodemailer').createTransport(require('../config/email'));
require('dotenv').config();

module.exports = ({ email }, cb) => {
  const message = `
    <h1 style="text-align: center;">Obrigado por ajudar a GL Holding a melhorar ainda mais!</h1>
    <br />
    <p>Todos os dias trabalhamos para melhorar ainda mais nossos serviços pois sabemos que sua satisfação é muito importante e sua colaboração agrega muito valor ao nosso desenvolvimento.</p>
    <br />
    <p>Tem alguma dúvida, precisa de um orçamento ou deseja saber mais sobre nosso grupo? Entre em contato conosco:</p>
    <p>(99) 3504-1790</p>
    <p>comercial@gnflorestal.com.br</p>
    <br />
    <a href="${process.env.URL}">
        Acesse GL Holding
    </a>
    <br /><br /><hr />

    <p>Atenciosamente, GL Holding</p>
  `;

  const sendEmail = {
    from: `${process.env.USERMAIL}`,
    to: email,
    subject: 'Obrigado por ajudar a GL Holding a melhorar ainda mais!',
    html: message,
  };

  if (process.env.NODE_ENV === 'production') {
    transporter.sendMail(sendEmail, (error) => {
      if (error) {
        console.log(error);
        return cb('Aconteceu um erro no envio do email, tente novamente.');
      }
      return cb(null, 'Obrigado por contatar a GL Holding!');
    });
  } else {
    console.log(sendEmail);
    return cb(null, 'Obrigado por contatar a GL Holding!');
  }
};
