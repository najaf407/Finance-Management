const joi = require('joi');

const createValidCategory = joi.object({
    name : joi.string().trim().min(3).max(50).required().messages({
        'string.empty' : 'Category name is required',
        'string.max' : 'Category name must be less than or equal to 50 characters',
        'string.min' : 'Category name must be at least 3 characters long'
    }),
    type : joi.string().valid('income', 'expense').required().messages({
        'string.empty' : 'Please select a category type',
        'any.only' : 'Category type must be either income or expense'

    })
})

module.exports = { createValidCategory }