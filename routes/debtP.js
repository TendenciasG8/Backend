// DebtP routes
const express = require('express');
const router = express.Router();
const debtPController = require('../controllers/debtPController');
 
// api/debtPs
router.post('/', debtPController.createDebtP);
router.get('/', debtPController.getDebtPs);
router.get('/ruc/:ruc', debtPController.getDebtPsByRuc);
router.delete('/ruc/:ruc', debtPController.deleteDebtPs);
module.exports = router;