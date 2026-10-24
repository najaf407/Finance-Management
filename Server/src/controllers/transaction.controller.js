const transactionService = require('../services/transaction.service');
const ApiResponse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');

const createTransaction = asyncHandler(async (req, res) => {

    const transaction = await transactionService.createTransaction(req.user.id, req.body);
    
    return res.status(201).json(new ApiResponse(201, transaction, 'Transaction created successfully'));

});

module.exports = { createTransaction };

