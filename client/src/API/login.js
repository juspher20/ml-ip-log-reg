import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


function Login (){
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event) {
      event.preventDefault();
      axios.post('http://localhost:8081/login',{email, password})
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
}
















// Assuming this code is in your server setup file (e.g., app.js or index.js)
app.post('http://localhost:8081/login', async (req, res) => {
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
  