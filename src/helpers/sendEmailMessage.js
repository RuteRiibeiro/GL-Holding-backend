const transporter = require('nodemailer').createTransport(require('../config/email'));
require('dotenv').config();

module.exports = ({ name, phoneNumber, email, subject, message }, cb) => {
  const messageEmail = `
    <h1 style="text-align: center;">Recebemos uma solicitação de contato</h1>
    <br />
    <p>Um visitante do site da GL Holding entrou em contato conosco através de um dos formulários do site. Averígue e direcione ao responsável, solicitando que retorne o contato com as informações deixadas pelo usuário.</p>
    <br /><hr />
    <br />
    <h2 style="text-align: center;">GL Holding contato</h2>
    <br />
    <p>Nome: ${name}</p>
    <p>Telefone: ${phoneNumber}</p>
    <p>Email: ${email}</p>
    <p>Assunto: ${subject}</p>
    <p>Mensagem: ${message}</p>
    <br /><br /><hr />
  `;

  const sendEmail = {
    from: `${process.env.USERMAIL}`,
    to: `${process.env.ADMINMAIL}`,
    subject: `Recebemos uma solicitação de contato`,
    html: messageEmail,
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
