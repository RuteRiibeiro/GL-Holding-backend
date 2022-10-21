const Message = require('./Message');
const BudgetMachines = require('./BudgetMachines');
const BudgetTransport = require('./BudgetTransport');

const models = [Message, BudgetMachines, BudgetTransport];

models.forEach(async (model) => await model.sync());

module.exports = models;
