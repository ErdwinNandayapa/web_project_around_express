const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const userController = require('../controllers/users')

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.post('/', userController.createUser);

module.exports = router;
