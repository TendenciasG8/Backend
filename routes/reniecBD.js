// ReniecBD routes
const express = require('express');
const router = express.Router();
const reniecBDController = require('../controllers/reniecBDController');
 
// api/reniecBDs
router.post('/', reniecBDController.createReniecBD);
router.get('/', reniecBDController.getReniecBDs);
router.get('/dni/:dni', reniecBDController.getReniecBDByDni);
module.exports = router;