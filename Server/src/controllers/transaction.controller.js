const transactionService = require('../services/transaction.service');
const ApiResponse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');

const createTransaction = asyncHandler(async (req, res) => {
    const transaction = await transactionService.createTransaction(req.user._id, req.body);

    return res.status(201).json(new ApiResponse(201, transaction, 'Transaction created successfully'));

});

const getTransactions = asyncHandler(async (req, res) => {
     const transactions = await transactionService.getTransactions(req.user._id, req.query);

     return res.status(200).json(new ApiResponse(200, transactions, 'Transactions fetched sucessfully'))
})

const updateTransaction = asyncHandler(async (req, res) => {
    const transaction = await transactionService.updateTransaction(req.user._id, req.params.id, req.body);

    res.status(200).json(new ApiResponse(200, transaction, 'Transaction updated successfully'));
});

const deleteTransaction = asyncHandler(async (req, res) => {
    await transactionService.deleteTransaction(req.user._id, req.params.id);

    res.status(200).json(new ApiResponse(200, null, 'Transaction deleted successfully'));
});

module.exports = { createTransaction, getTransactions, updateTransaction, deleteTransaction };

