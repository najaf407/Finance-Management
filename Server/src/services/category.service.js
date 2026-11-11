const categoryModel = require('../models/category.model')
const ApiError = require('../utils/ApiError')
const defultCategories = require('../config/defaultCategories');
const { categoryIdParam } = require('../validators/category.validator');

const createCategory = async (userId, data) => {
    try {
        const category = await categoryModel.create({
            user: userId,
            name: data.name,
            type: data.type,
        });
    } catch (err) {
        if (err.code === 11000) {
            throw new ApiError(409, "Category already exists");
        }
        throw err;
    }
};

const seedDefaultCategories = async (userId) => {
    const docs = defultCategories.map(cat => ({
        ...cat,
        user: userId
    }));

    await categoryModel.insertMany(docs);
};

const getCategories = async (userId, type) => {
    const filter = { user: userId }
    if (type) { filter.type = type }
    return await categoryModel.find(filter).sort({ name: 1 });
}

const getCategory = async (userId, categoryId) => {
    const category = await categoryModel.findOne({_id : categoryId, user : userId})
    if (!category) {
        throw new ApiError(404, 'Category not found')
    }
    return category
}

const updateCategory = async (userId, categoryId, data) => {
    try {
        const newName = data.name?.trim()
        const category = await categoryModel.findOne({_id : categoryId, user : userId})
        if (!category) {
            throw new ApiError(404, 'Category not found')
        }
        const duplicate = await categoryModel.findOne({
            user : userId,
            name : newName,
            type : category.type,
        })
        if (duplicate) {
            throw new ApiError(409, "Category with this name and type already exist")
        }
        return await categoryModel.findOneAndUpdate(
            {user : userId, _id : categoryId},
            { $set : {name : newName}},
            {new : true, runValidator : true}
        )
    } catch (err) {
        if (err.code === 11000) {
            throw new ApiError(409, 'Category with this name already exists');
        }
        throw err;
    }
}

const deleteCategory = async (userId, categoryId) => {
    const category = await categoryModel.findOneAndDelete({user : userId, _id : categoryId})
    if (!category) {
        throw new ApiError(404, 'Category not found');
    }

    return category;
}

module.exports = { createCategory, seedDefaultCategories, getCategories, getCategory, updateCategory, deleteCategory }