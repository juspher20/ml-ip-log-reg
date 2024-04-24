const express = require('express');
const app = express();

// Middleware to allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Update this with your client's origin
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Your other routes and middleware
app.use('/api', require('./routes/api')); // Assuming your API routes are defined in a separate file

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
