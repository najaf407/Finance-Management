const express = require('express');
const router = express.Router();
const { validateRequest }  = require('../middlewares/validator.middleware');
const { createCategory } = require('../controllers/category.controller');
const { createValidCategory } = require('../validators/category.validator');
const auth = require('../middlewares/auth.middleware');

router.post('/create', auth, validateRequest(createValidCategory), createCategory);


module.exports = router;