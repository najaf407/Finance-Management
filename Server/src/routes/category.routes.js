const express = require('express');
const router = express.Router();
const { validateRequest }  = require('../middlewares/validator.middleware');
const { createCategory, getCategories, updateCategory, deleteCategory, getCategory } = require('../controllers/category.controller');
const { createValidCategory, getCategoriesQuery, updateValidCategory, categoryIdParam } = require('../validators/category.validator');
const auth = require('../middlewares/auth.middleware');

router.post('/create', auth, validateRequest(createValidCategory), createCategory);
router.get('/', auth, validateRequest(getCategoriesQuery, 'query'),  getCategories);
router.get('/:id', auth, validateRequest(categoryIdParam, 'params'), getCategory)
router.patch('/:id', auth, validateRequest(categoryIdParam, 'params'), validateRequest(updateValidCategory), updateCategory)
router.delete('/:id', auth,validateRequest(categoryIdParam, 'params'), deleteCategory) 

module.exports = router;