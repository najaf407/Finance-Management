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

const getTransactions = async (userId, query) => {
      const filter = { user : userId}
      if(query.category) { filter.category = query.category }
      if (query.type) { filter.type = query.type }
      
      const page = Number(query.page) || 1
      const limit = Number(query.limit) || 20

      const [transactions, total] = await Promise.all([
           transactionModel.find(filter).sort({date : -1, createdAt : -1}).skip((page-1)*limit).limit(limit),
           transactionModel.countDocuments(filter)
      ])

      return {
        transactions,
        pagination : {page, limit, total, totalPages : Math.ceil(total/limit)}
      }
}

const updateTransaction = async (userId, transactionId, data) => {
  const transaction = await transactionModel.findOne({ _id: transactionId, user: userId });
  if (!transaction) {
    throw new ApiError(404, 'Transaction not found');
  }

  if (data.category) {
    const category = await categoryModel.findOne({ _id: data.category, user: userId });
    if (!category) {
      throw new ApiError(404, 'Category not found');
    }
    if (category.type !== transaction.type) {
      throw new ApiError(400, 'Category type does not match transaction type');
    }
  }

  Object.assign(transaction, data);
  await transaction.save();

  return transaction;
};

const deleteTransaction = async (userId, transactionId) => {
  const transaction = await transactionModel.findOneAndDelete({ _id: transactionId, user: userId });

  if (!transaction) {
    throw new ApiError(404, 'Transaction not found');
  }

  return transaction;
};

module.exports = { createTransaction, getTransactions, updateTransaction, deleteTransaction };