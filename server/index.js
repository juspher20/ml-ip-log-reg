const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./src/routes/auth.routes');
const userRouter = require('./src/routes/user.Routes');
const authMiddleware = require('./src/middleware/auth.Middleware');
const formRouter = require('./src//routes/form.Routes');
const ProductModel = require('./src/models/product.model');
const{check, validateResult} = require('express-validator');
const Product = require('./src/models/product.model');
const productRoute = require('./src/routes/product.routes')
const cors = require('cors');

const app = express() 
const PORT = 5000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api',async(req, res)=>{
  res.send("welcome server-side")
});



// routes
app.use('/api/products', productRoute);
app.use(cors());
app.use('/auth', authRouter);
app.use('/users', authMiddleware, userRouter);
app.use('/formRoutes', formRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




mongoose.connect("mongodb+srv://raynalynsalonoy:v7jdrpGB2auRRgMO@backenddb.in1vwzb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
 .then(() =>{
   console.log("Connected to Database!");
   app.listen(PORT, () => {
    console.log(`Server started on port${PORT}`);
  });
  
})
  .catch(() =>{
  console.log("Connection Failed!")
 });





