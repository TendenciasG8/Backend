// Debt routes
const express = require('express');
const router = express.Router();
const debtController = require('../controllers/debtController');
 
// api/debts
router.post('/', debtController.createDebt);
router.get('/', debtController.getDebts);
router.get('/ruc/:ruc', debtController.getDebtsByRuc);
router.delete('ruc/:ruc', debtController.deleteDebts);
module.exports = router;