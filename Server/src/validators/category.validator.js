const joi = require('joi');

const createValidCategory = joi.object({
    name: joi.string().trim().min(3).max(50).lowercase().required().messages({
        'string.empty': 'Category name is required',
        'string.max': 'Category name must be less than or equal to 50 characters',
        'string.min': 'Category name must be at least 3 characters long'
    }),
    type: joi.string().valid('income', 'expense').required().messages({
        'string.empty': 'Please select a category type',
        'any.only': 'Category type must be either income or expense'

    })
})

const getCategoriesQuery = joi.object({
    type: joi.string().valid('income', 'expense').optional().messages({
        'any.only': 'Invalid category type'
    })
});

const updateValidCategory = joi.object({
    name: joi.string().trim().min(3).max(50).required().messages({
        'string.empty': 'Category name is required',
        'string.max': 'Category name must be less than or equal to 50 characters',
        'string.min': 'Category name must be at least 3 characters long'
    })
});
const categoryIdParam = joi.object({
    id: joi.string().hex().length(24).required().messages({
        'string.length': 'Invalid category id',
        'string.hex': 'Invalid category id',
        'any.required': 'Category id is required'
    })
})

module.exports = { createValidCategory, getCategoriesQuery, updateValidCategory, categoryIdParam }