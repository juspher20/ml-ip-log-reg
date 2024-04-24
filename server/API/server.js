const authRouter = require('./src/routes/auth.routes');
const userRouter = require('./src/routes/user.Routes');
const authMiddleware = require('./src/middleware/auth.Middleware');
const formRouter = require('./src//routes/form.Routes');
const ProductModel = require('./src/models/product.model');
const{check, validateResult} = require('express-validator');
const Product = require('./src/models/product.model');
const productRoute = require('./src/routes/product.routes')



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