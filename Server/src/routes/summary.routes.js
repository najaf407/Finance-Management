const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const { validateRequest }  = require('../middlewares/validator.middleware');
const { getSummary } = require('../controllers/summary.controller');
const { summaryQuery } = require('../validators/summary.validator');
const rateLimit = require('express-rate-limit');

const summaryLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 60,             // 1 minute mein 60 requests
});

router.get('/', auth, summaryLimiter, validateRequest(summaryQuery, 'query'), getSummary);

module.exports = router;