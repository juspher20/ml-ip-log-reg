const express = require('express');
const ROUTER = express.Router();
const controller = require('../controllers/controller');

ROUTER.get('/url-path', controller.getProduct); // this is fetching/ 