const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4000
;

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/api/home/',async(req, res)=>{
    res.send("hi boi")
});

app.listen(PORT, () => {
  console.log(`Server started on port${PORT}`)
})



// Login endpoint
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

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


