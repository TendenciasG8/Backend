// Autentificacion de usuario routes
const express = require('express');
const router = express.Router();
const authBusinessController = require('../controllers/authBusinessController');
 
// api/users
router.post('/login', authBusinessController.login);
module.exports = router;