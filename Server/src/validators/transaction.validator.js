const Joi = require('joi');

const createValidTransaction = Joi.object({
  category: Joi.string().hex().length(24).required().messages({
    'any.required': 'Please select category',
    'string.empty': 'Please select category',
    'string.hex': 'Invalid category',
    'string.length': 'Invalid category',
  }),
  amount: Joi.number().positive().required().messages({
    'any.required': 'Please enter amount',
    'number.base': 'Amount must be a number',
    'number.positive': 'Amount must be greater than 0',
  }),
  date: Joi.date().max('now').messages({
    'date.base': 'Invalid date',
    'date.max': 'Date cannot be in the future',
  }),
  note: Joi.string().trim().max(200).allow(''),
});

const getTransactionsQuery = Joi.object({
  type: Joi.string().valid('income', 'expense').optional().messages({
    'any.only': 'Invalid category type'
  }),
  category: Joi.string().hex().length(24),
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1).max(100)
})

const transactionIdParam = Joi.object({
  id: Joi.string().hex().length(24).required().messages({
    'string.length': 'Invalid category id',
    'string.hex': 'Invalid category id',
    'any.required': 'Category id is required'
  })
})

const updateValidTransaction = Joi.object({
  category: Joi.string().hex().length(24).messages({
    'string.hex': 'Invalid category',
    'string.length': 'Invalid category',
    'string.empty': 'Please select category',
  }),
  amount: Joi.number().positive().precision(2).messages({
    'number.base': 'Amount must be a number',
    'number.positive': 'Amount must be greater than 0',
  }),
  date: Joi.date().max('now').messages({
    'date.base': 'Invalid date',
    'date.max': 'Date cannot be in the future',
  }),
  note: Joi.string().trim().max(200).allow(''),
})
  .min(1)
  .messages({ 'object.min': 'Provide at least one field to update' });

module.exports = { createValidTransaction, getTransactionsQuery, transactionIdParam, updateValidTransaction, updateValidTransaction };