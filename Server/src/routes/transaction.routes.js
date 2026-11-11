const express = require('express');
const router = express.Router();
const { validateRequest }  = require('../middlewares/validator.middleware');
const { createTransaction, getTransactions, updateTransaction, deleteTransaction } = require('../controllers/transaction.controller');
const { createValidTransaction, getTransactionsQuery, transactionIdParam, updateValidTransaction } = require('../validators/transaction.validator');
const auth = require('../middlewares/auth.middleware');

router.post('/create', auth, validateRequest(createValidTransaction), createTransaction);
router.get('/', auth, validateRequest(getTransactionsQuery, 'query'), getTransactions);
router.patch('/:id', auth, validateRequest(transactionIdParam, 'params'), validateRequest(updateValidTransaction), updateTransaction);
router.delete('/:id', auth, validateRequest(transactionIdParam, 'params'), deleteTransaction);

module.exports = router;