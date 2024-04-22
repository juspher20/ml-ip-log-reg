const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express')
const bodyParser = require('body-parser')
const{check, validateResult} = require('express-validator');
const app = express()
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api',async(req, res)=>{
  res.send("Hello there,welcome server-side")
});

app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`)
})


// Validation middleware
const validateRegisterInput = [
  check('username').notEmpty().withMessage('Username is required'),
  check('email').isEmail().withMessage('Invalid email'),
  check('contactNumber').notEmpty().withMessage('Contact number is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

const validateLoginInput = [
  check('email').isEmail().withMessage('Invalid email'),
  check('password').notEmpty().withMessage('Password is required')
];


// Assuming this code is in your server setup file (e.g., app.js or index.js)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, 'yhd$uV4!#qZ8j@*E7');

    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Registration endpoint
app.post('/register', async (req, res) => {
  const { username, email, contactNumber , password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, contactNumber, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



 