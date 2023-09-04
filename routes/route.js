const express = require('express');
const router = express.Router();

const { login, data } = require('../controllers/login');
const tokenVarify = require('../middleware/token');

router.route('/login').post(login);

router.route('/token').get(tokenVarify, data);

module.exports = router;