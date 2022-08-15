// DebtB routes
const express = require('express');
const router = express.Router();
const debtBController = require('../controllers/debtBController');
 
// api/debtBs
router.post('/', debtBController.createDebtB);
router.get('/', debtBController.getDebtBs);
router.get('/n_orderB/:n_orderB', debtBController.getDebtBByOrder);
router.put('/n_orderB/:n_orderB', debtBController.updateDebtBState);
router.get('/ruc/:ruc', debtBController.getDebtBsByRuc);
router.delete('/ruc/:ruc', debtBController.deleteDebtBs);
module.exports = router;