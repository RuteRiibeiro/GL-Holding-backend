const { check } = require('express-validator');

const saveMessage = [
  check('name').isLength({ min: 3 }).withMessage('O nome deve ter no mínimo 3 caracteres'),
  check('email').isEmail().withMessage('Digite um email válido'),
  check('phoneNumber').isMobilePhone(['pt-BR']).withMessage('Digite um numero de telefone válido'),
  check('subject').isLength({ min: 3, max: 100 }).withMessage('O assunto deve ter entre 3 e 100 caracteres'),
  check('message').isLength({ min: 3, max: 250 }).withMessage('A mensagem deve ter entre 3 e 250 caracteres'),
];

const saveEmail = [
  check('email').isEmail().withMessage('Digite um email válido'),
];

module.exports = { saveMessage, saveEmail };
