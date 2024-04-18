const {check, validationResult} = require('express-validator');

// middleware/validationMiddleware.js

const { validationResult, check } = require('express-validator');

exports.validateRegisterInput = [
  check('username').notEmpty().withMessage('Username is required'),
  check('email').isEmail().withMessage('Invalid email'),
  check('contactNumber').notEmpty().withMessage('Contact number is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

exports.validateLoginInput = [
  check('email').isEmail().withMessage('Invalid email'),
  check('password').notEmpty().withMessage('Password is required')
];

exports.checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
