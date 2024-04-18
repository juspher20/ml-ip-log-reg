const require = require('express');
const bodyParser = require('body-parser');
const{check, validationResult} =  require('express-validator');
const db  = require('../models/db');

const 