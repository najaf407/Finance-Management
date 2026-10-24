const express = require('express');
const router = express.Router();
const { validateRequest }  = require('../middlewares/validator.middleware');
const { createTransaction } = require('../controllers/transaction.controller');
const { createValidTransaction } = require('../validators/transaction.validator');
const auth = require('../middlewares/auth.middleware');

router.post('/create', auth, validateRequest(createValidTransaction), createTransaction);

module.exports = router;