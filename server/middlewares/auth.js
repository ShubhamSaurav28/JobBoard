const jwt = require('jsonwebtoken');
const secretKey = 'secret_key'; // Replace with your secret key

// Middleware function to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded; // Attach decoded user information to the request object
    next(); // Call next middleware or route handler
  });
};

module.exports = verifyToken;
