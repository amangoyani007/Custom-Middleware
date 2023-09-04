const express = require('express');
const router = express.Router();

const { login } = require('../controllers/login');
const tokenVarify = require('../middleware/token');

router.route('/login').post(login);

router.route('/token').get(tokenVarify);

module.exports = router;