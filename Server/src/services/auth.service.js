const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const ApiError = require('../utils/ApiError')
const categoryService = require('./category.service')

// userSignUp

const userSignUp = async ({name, email, password}) => {
    let user;
    try {
        user = await userModel.create({ name, email, password})
    } catch (err) {
        if (err.code === 1100) { 
            throw new ApiError(409, "User already exists")
        }
        throw err;
    }

    await categoryService.seedDefaultCategories(user._id)

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

    return { user, token }
}

// userLogin

const userLogin = async ({ email, password }) => {
  const user = await userModel.findOne({ email }).select('+password');

  if (!user) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  return { user, token };
};

module.exports = { userSignUp, userLogin };