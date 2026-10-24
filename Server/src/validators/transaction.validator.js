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

module.exports = { createValidTransaction };