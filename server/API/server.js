const express = require('express');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const authMiddleware = require('./middlewares/authMiddleware');
const app = express();
const port = 4000;

app.use(express.json());



// Routes
app.use('/auth', authRouter);
app.use('/users', authMiddleware, userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});