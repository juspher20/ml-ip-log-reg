const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');


// login endpoint
router.post('/login', async (req, res) => {
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
router.post('/register', async (req, res) => {
    const { username, email, contactNumber, password,  } = req.body;
    
    let user = await User.findOne({ email, password });
    if (!user) return res.status(400).send("Invalid email or password");
    

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

module.exports = router;