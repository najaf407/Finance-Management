const errorHandler = (err, req, res, next) => {

    if (err.code === 11000) {
        err.statusCode = 409;
        err.message = "User already exists";
    }

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Problem";

    res.status(statusCode).json({
        statusCode,
        message,
        errors: err.errors || [],
        ...(process.env.NODE_ENV === "development" && {
            stack: err.stack
        })
    });
};

module.exports = errorHandler;