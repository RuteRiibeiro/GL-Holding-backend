const sendEmailClient = require('../helpers/sendEmailClient');
const sendEmailBudgetMachines = require('../helpers/sendEmailBudgetMachines');
const BudgetMachines = require('../models/BudgetMachines');

const save = async (req, res) => {
  const { name, companyName, email, phoneNumber, comments, time, equipment } = req.body;

  try {
    await sendEmailClient({ email }, async (error = null, success = null) => {
      if (error) res.json({ error });
      if (success) {
        await sendEmailBudgetMachines({ name, companyName, email, phoneNumber, comments, time, equipment }, async (error = null, success = null) => {
          if (error) res.json({ error });
          if (success) {
            await BudgetMachines.create({ name, companyName, email, phoneNumber, comments, time, equipment });
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
    const allBudgetMachines = await BudgetMachines.findAll({});
    return res.json({ allBudgetMachines });
  } catch (e) {
    return res.status(500).json({ errors: 'Aconteceu um erro no servidor, tente novamente mais tarde!' });
  }
};

module.exports = { save, findAll };
