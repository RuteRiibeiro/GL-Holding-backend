const router = require('express').Router();
const validation = require('../middleware/validation');

const message = require('../controller/message');
const budgetMachines = require('../controller/budgetMachines');
const budgetTransport = require('../controller/budgetTransport');

const messageValidations = require('../validations/messageValidations');
const budgetMachinesValidations = require('../validations/budgetMachinesValidations');
const budgetTransportValidations = require('../validations/budgetTransportValidations');

router.post('/mensagem', messageValidations.save, validation, message.save);
router.get('/mensagem', message.findAll);

router.post('/orcamento-maquinas', budgetMachinesValidations.save, validation, budgetMachines.save);
router.get('/orcamento-maquinas', budgetMachines.findAll);

router.post('/orcamento-transporte', budgetTransportValidations.save, validation, budgetTransport.save);

router.get('/', (req, res) => res.send({ ok: true }));

module.exports = router;
