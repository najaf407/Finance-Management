const categoryService = require('../services/category.service')
const ApiResponse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');


const createCategory = asyncHandler(async (req, res) => {
    const category = await categoryService.createCategory(req.user._id, req.body);
    
    return res.status(201).json(new ApiResponse(201, { category }, "Category created successfully"));
});

const getCategories = asyncHandler(async (req, res) => {
    const categories = await categoryService.getCategories(req.user._id, req.query.type);

    return res.status(200).json(new ApiResponse(200, categories , "Categories fetched successfully"));
});

const getCategory = asyncHandler( async (req, res) => {
    const category = await categoryService.getCategory( req.user._id, req.params.id)

    res.status(200).json(new ApiResponse(200, category, 'Category fetched sucessfully'))
})

const updateCategory = asyncHandler(async (req, res) => {
    const category = await categoryService.updateCategory(
        req.user._id,
        req.params.id,
        req.body
    )

    res.status(200).json(new ApiResponse(200, category, "Category updated sucessfully"))
})

const deleteCategory = asyncHandler( async (req, res) => {
     await categoryService.deleteCategory(req.user._id, req.params.id)

    res.status(200).json(new ApiResponse(200, null, 'Category deleted sucessfully'))
})

module.exports = { createCategory, getCategories, getCategory, updateCategory, deleteCategory };