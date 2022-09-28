const sendEmail = require('../helpers/email');
const Email = require('../models/Email');
const Message = require('../models/Message');

const saveMessage = async (req, res) => {
  const {
    name, phoneNumber, email, subject, message,
  } = req.body;
  try {
    await sendEmail({ email }, async (error = null, success = null) => {
      if (error) res.send({ error });
      if (success) {
        await Message.create({
          name, phoneNumber, email, subject, message,
        });
        return res.json({ success });
      }
    });
  } catch (e) {
    return res.status(500).json({ errors: 'Aconteceu um erro no servidor, tente novamente mais tarde!' });
  }
};

const saveEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const emailExists = await Email.findOne({ where: { email } });
    if (emailExists) return res.status(422).json({ errors: 'E-mail já cadastrado em nossa base de dados' });

    await sendEmail({ email }, async (error = null, success = null) => {
      if (error) res.send({ error });
      if (success) {
        await Email.create({ email });
        return res.json({ success });
      }
    });
  } catch (e) {
    return res.status(500).json({ errors: 'Aconteceu um erro no servidor, tente novamente mais tarde!' });
  }
};

module.exports = { saveMessage, saveEmail };
