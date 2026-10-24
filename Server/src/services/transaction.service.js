const transactionModel = require('../models/transaction.model');
const categoryModel = require('../models/category.model');
const ApiError = require('../utils/ApiError');

const createTransaction = async (userId, data) => {
  const category = await categoryModel.findOne({
    _id: data.category,
    user: userId,
  });

  if (!category) {
    throw new ApiError(404, 'Category not found');
  }

  const transaction = await transactionModel.create({
    user: userId,
    category: category._id,
    type: category.type,
    amount: data.amount,
    date: data.date,
    note: data.note,
  });

  return transaction;
};

module.exports = { createTransaction };