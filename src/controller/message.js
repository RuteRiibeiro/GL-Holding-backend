const sendEmailClient = require('../helpers/sendEmailClient');
const sendEmailMessage = require('../helpers/sendEmailMessage');
const Message = require('../models/Message');

const save = async (req, res) => {
  const { name, phoneNumber, email, subject, message } = req.body;

  try {
    await sendEmailClient({ email }, async (error = null, success = null) => {
      if (error) res.json({ error });
      if (success) {
        await sendEmailMessage({ name, phoneNumber, email, subject, message }, async (error = null, success = null) => {
          if (error) res.json({ error });
          if (success) {
            await Message.create({ name, phoneNumber, email, subject, message });
            return res.json({ success });
          }
        });
      }
    });
  } catch (e) {
    return res.status(500).json({ errors: 'Aconteceu um erro no servidor, tente novamente mais tarde!' });
  }
};

const findAll = async (req, res) => {
  try {
    const allMessage = await Message.findAll({});
    console.log('🚀 ~ file: message.js ~ line 30 ~ findAll ~ allMessage', allMessage);
    return res.send('ok');
  } catch (e) {
    return res.status(500).json({ errors: 'Aconteceu um erro no servidor, tente novamente mais tarde!' });
  }
};

module.exports = { save, findAll };
