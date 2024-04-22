// Assuming this code is in your server setup file (e.g., app.js or index.js)
app.post('/register', async (req, res) => {
    const { username, email, contactNumber, password } = req.body;
  
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
  