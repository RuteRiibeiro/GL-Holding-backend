const Message = require('./Message');
const Email = require('./Email');

const models = [Email, Message];

models.forEach(async (model) => await model.sync());

module.exports = models;
