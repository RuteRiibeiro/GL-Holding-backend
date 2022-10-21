const { check } = require('express-validator');

const save = [check('email').isEmail().withMessage('Digite um email válido')];

module.exports = { save };
