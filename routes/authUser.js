// Autentificacion de usuario routes
const express = require('express');
const router = express.Router();
const authUserController = require('../controllers/authUserController');
 
// api/users
router.post('/login', authUserController.login);
module.exports = router;