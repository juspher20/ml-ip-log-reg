const express = require('express');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const authMiddleware = require('./middlewares/authMiddleware');
const formRouter = require('./routes/formRoutes');
const productModel = require('./models/product');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(express.json());

// Routes
app.use(cors());
app.use('/auth', authRouter);
app.use('/users', authMiddleware, userRouter);
app.use('/formRoutes', formRouter);
app.use('./product', productModels, userModels);


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
