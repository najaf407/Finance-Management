const Joi = require('joi');

const dayString = Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).messages({
    'string.pattern.base': 'Date must be in YYYY-MM-DD format',
});

const summaryQuery = Joi.object({
    from: dayString,
    to: dayString,
    type: Joi.string().valid('income', 'expense'),
    year: Joi.number().integer().min(2000).max(2100),
})
    .without('year', ['from', 'to'])
    .custom((value, helpers) => {
        if (value.from && value.to && value.to < value.from) {
            return helpers.message('"to" must be on or after "from"');
        }
        return value;
    });

module.exports = { summaryQuery };