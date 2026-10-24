const express = require('express');
const router =  express.Router();
const { validateRequest }  = require('../middlewares/validator.middleware');
const { createValidSignUp, createValidLogin } = require('../validators/auth.validator');
const { SignUp, Login } = require('../controllers/auth.controller');

router.post('/SignUp', validateRequest(createValidSignUp), SignUp);
router.get('/Login', validateRequest(createValidLogin), Login);

module.exports = router;