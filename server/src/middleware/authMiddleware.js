const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  
  const token = req.headers.authorization;

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(token, 'hd$uV4!#qZ8j@*E7');

    // Attach the decoded token to the request object for further use
    req.user = decodedToken;

    // Call the next middleware or route handler
    next();
  } catch (error) {
   
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;