const categoryService = require('../services/category.service')
const ApiResponse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');


const createCategory = asyncHandler(async (req, res) => {
    const category = await categoryService.createCategory(req.user.id, req.body);

    return res.status(201).json(new ApiResponse(201, { category }, "Category created successfully"));
});

module.exports = { createCategory };