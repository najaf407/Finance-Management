const express = require('express');
const router =  express.Router();
const rateLimit = require('express-rate-limit');
const auth = require('../middlewares/auth.middleware');
const { validateRequest }  = require('../middlewares/validator.middleware');
const { createValidSignUp, createValidLogin } = require('../validators/auth.validator');
const { SignUp, Login, LogOut, GetMe } = require('../controllers/auth.controller');

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minute
    max: 10,                  // 15 minute mein 10 koshishein
    message: { success: false, message: 'Too many attempts, please try again after 15 minutes' },
});

router.post('/signup', authLimiter, validateRequest(createValidSignUp), SignUp);
router.post('/login', authLimiter, validateRequest(createValidLogin), Login);
router.post('/logout', auth, LogOut);
router.get('/me', auth, GetMe);

module.exports = router;