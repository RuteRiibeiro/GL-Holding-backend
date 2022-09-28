const router = require('express').Router();
const contact = require('../controller/contact');
const validation = require('../middleware/validation');
const contactValidations = require('../validations/contactValidations');

router.post('/mensagem', contactValidations.saveMessage, validation, contact.saveMessage);
router.post('/contato', contactValidations.saveEmail, validation, contact.saveEmail);

router.get('/', (req, res) => res.send({ ok: true }));

module.exports = router;
