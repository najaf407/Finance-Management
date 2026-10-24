const authService = require('../services/auth.service')
const ApiResponse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');
const cookieOptions = require('../config/cookie')

const SignUp = asyncHandler(async (req, res) => {
         const {user, token} = await authService.userSignUp(req.body);

        res.cookie('token', token, cookieOptions)

        return res.status(201).json(new ApiResponse(201, {user}, "User created successfully"));
})

const Login = asyncHandler(async (req, res) => {
        const {user, token} = await authService.userLogin(req.body);
        
        res.cookie('token', token, cookieOptions)

        return res.status(200).json(new ApiResponse(200, {user}, "User logged in successfully"));

})        

module.exports = { SignUp, Login }