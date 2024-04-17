const User = require('../models/user'); 
const bcrypt = require('bcrypt'); 


exports.registerUser = async (req, res) => {
  try {
   
    const { username, email, password } = req.body;

    
    const hashedPassword = await bcrypt.hash(password, 10);
e
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword 
    });

    // Send a success response with the newly registered user
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller function to login a user
exports.loginUser = async (req, res) => {
  try {
   
    const { email, password } = req.body;

   
    const user = await User.findOne({ where: { email } });

  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    
    res.status(200).json({ success: true, user });
  } catch (error) {
   
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Other controller functions for updating user profile, getting user details, etc., can be defined similarly
