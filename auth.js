require('dotenv').config();
const jwt = require('jsonwebtoken'); // Load environment variables
const JWT_SECRET = process.env.JWT_SECRET;

const auth = function (req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: 'Incorrect Credentials',
    });
  }
};

module.exports = auth;
