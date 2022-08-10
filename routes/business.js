// Business routes
const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');
 
// api/businesss
router.post('/', businessController.createBusiness);
router.get('/', businessController.getBusinesss);
router.get('/ruc/:ruc', businessController.getBusinessByRuc);
module.exports = router;