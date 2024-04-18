const User = require('/models/User');

app.post('Register', async (req, res) =>{
    const {username, email, contactNumber, password} = req.body;

    try {
        const existingUser = await User.findByEmail(email);
        if(existingUser);
        return res.status(400).json({message: 'User already exist'});
    }


 await User.create(username, email, password);

 res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
 console.error('Error during registration:', error);
 res.status(500).json({ message: 'Internal server error' });

 
  }


});