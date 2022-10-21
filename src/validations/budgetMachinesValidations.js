const { check } = require('express-validator');

const save = [
  check('name').isLength({ min: 3 }).withMessage('O nome deve ter no mínimo 3 caracteres'),
  check('companyName').isLength({ min: 3 }).withMessage('O nome da empresa deve ter no mínimo 3 caracteres'),
  check('email').isEmail().withMessage('Digite um email válido'),
  check('phoneNumber').isMobilePhone(['pt-BR']).withMessage('Digite um numero de telefone válido'),
  check('comments').isLength({ min: 3, max: 100 }).withMessage('O comentário deve ter entre 3 e 100 caracteres'),
];

module.exports = { save };
