const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');

const auth = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization;

  const token =
    req.cookies?.token ||
    (header && header.startsWith('Bearer ') ? header.split(' ')[1] : null);

  if (!token) {
    throw new ApiError(401, 'Please login first');
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw new ApiError(401, 'Invalid or expired token');
  }

  const user = await userModel.findById(decoded.id).select('-password');
  if (!user) {
    throw new ApiError(401, 'User not found');
  }

  req.user = user;
  next();
});

module.exports = auth;