// DebtB routes
const express = require('express');
const router = express.Router();
const debtBController = require('../controllers/debtBController');
 
// api/debtBs
router.post('/', debtBController.createDebtB);
router.get('/', debtBController.getDebtBs);
router.get('/ruc/:ruc', debtBController.getDebtBsByRuc);
router.delete('/ruc/:ruc', debtBController.deleteDebtBs);
module.exports = router;