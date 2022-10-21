const sendEmailClient = require('../helpers/sendEmailClient');
const sendEmailBudgetTransport = require('../helpers/sendEmailBudgetTransport');
const BudgetTransport = require('../models/BudgetTransport');

const save = async (req, res) => {
  const { name, phoneNumber, email, subject, message } = req.body;

  try {
    await sendEmailClient({ email }, async (error = null, success = null) => {
      if (error) res.json({ error });
      if (success) {
        await sendEmailBudgetTransport({ name, phoneNumber, email, subject, message }, async (error = null, success = null) => {
          if (error) res.json({ error });
          if (success) {
            await BudgetTransport.create({ name, phoneNumber, email, subject, message });
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
    const allBudgetTransport = await BudgetTransport.findAll({});
    return res.json({ allBudgetTransport });
  } catch (e) {
    return res.status(500).json({ errors: 'Aconteceu um erro no servidor, tente novamente mais tarde!' });
  }
};

module.exports = { save, findAll };
