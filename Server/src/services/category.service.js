const categoryModel = require('../models/category.model')
const ApiError = require('../utils/ApiError')
const defultCategories = require('../config/defaultCategories')

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

module.exports = { createCategory, seedDefaultCategories }