// Tribute routes
const express = require('express');
const router = express.Router();
const tributeController = require('../controllers/tributeController');
 
// api/users
router.post('/', tributeController.createTribute);
router.get('/', tributeController.getTributes);
router.get('/code/:code', tributeController.getTributeByCode);
module.exports = router;