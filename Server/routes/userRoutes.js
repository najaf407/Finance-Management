const express = require('express');
const router =  express.Router();
const { userSignUp } = require('../controllers/userSignUp')
const { userLogin } = require('../controllers/userLogin')

router.post('/RegisterUser', userSignUp);
router.get('/GetUser', userLogin);

module.exports = router;
