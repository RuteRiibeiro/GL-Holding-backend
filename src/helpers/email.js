const transporter = require('nodemailer').createTransport(require('../config/email'));
require('dotenv').config();

module.exports = ({ email }, cb) => {
  const message = `
    <h1 style="text-align: center;">Obrigado por contatar a GL Holding! </h1>
    <br />
    <p>
        Recebemos sua mensagem e em breve nossa equipe entrará em contato para tratar do assunto.
    </p>
    <a href="${process.env.URL}">
        Acesse GL Holding
    </a>
    <br /><br /><hr />

    <p>Atenciosamente, GL Holding</p>
  `;

  const sendEmail = {
    from: `${process.env.USERMAIL}`,
    to: email,
    subject: 'Obrigado por contatar a GL Holding!',
    html: message,
  };

  transporter.sendMail(sendEmail, (error) => {
    if (error) {
      console.log(error);
      return cb('Aconteceu um erro no envio do email, tente novamente.');
    }
    return cb(null, 'Obrigado por contatar a GL Holding!');
  });
};
