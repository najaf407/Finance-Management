const joi = require('joi');

const createValidSignUp = joi.object({
    name : joi.string().trim().required().messages({
        'string.empty' : 'Name is required',
        'string.required' : 'Name is required'
    }),
    email : joi.string().trim().email().required().messages({
        'string.empty' : 'Email is required',
        'string.required' : 'Email is required',
        'string.email' : 'Please enter a valid email address'
    }),
    password : joi.string().trim().min(8).required().messages({
        'string.empty' : 'Password is required',
        'string.required' : 'Password is required',
        'string.min' : 'Password must be at least 8 characters long'
    })
})

const createValidLogin = joi.object({ 
    email : joi.string().trim().email().required().messages({
        'string.empty' : 'Email is required',
        'string.required' : 'Email is required',
        'string.email' : 'Please enter a valid email address'
    }),
    password : joi.string().trim().min(8).required().messages({
        'string.empty' : 'Password is required',
        'string.required' : 'Password is required',
        'string.min' : 'Password must be at least 8 characters long'
    })
})

module.exports = { createValidSignUp, createValidLogin };