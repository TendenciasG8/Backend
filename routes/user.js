// User routes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
 
// api/users
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/dni/:dni', userController.getUserByDni);
router.get('/ruc/:ruc', userController.getUserByRuc);
module.exports = router;