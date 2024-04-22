const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const { connection } = require('../config/db');

const router = express.Router();
router.use(bodyParser.json());

const validationRules = [
  check('username').notEmpty(),
  check('email').isEmail(),
  check('password').isLength({ min: 6 }),
  check('contactNumber').isMobilePhone('any', { strictMode: false }) // Validate contact number
];

router.post('/submit', validationRules, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { username, email, password, contactNumber } = req.body;

  try {
    const sql = 'INSERT INTO users (username, email, password, contact_number) VALUES (?, ?, ?, ?)';
    await connection.query(sql, [username, email, password, contactNumber]);

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
    