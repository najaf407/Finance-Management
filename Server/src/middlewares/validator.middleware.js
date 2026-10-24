const ApiError = require('../utils/ApiError');

const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body,
            {
                abortEarly: false,
                stripUnknown: true
            })

        if (error) {
            const messages = error.details.map(detail => detail.message);
            return next(new ApiError(400, messages.join(', ')));
        }

        req.body = value;
        next();
    }
};

module.exports = { validateRequest };