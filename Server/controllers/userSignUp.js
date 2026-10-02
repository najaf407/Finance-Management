const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please fill all required fields"
            })
        };

        const ifUserExist = await userModel.findOne({ email })
        if (ifUserExist) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        })

        const token = jwt.sign(
            { id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' }
        );

        const cookieOptions = {
            expires : new Date(Date.now()+7*24*60*60*1000),
            httpOnly : true,
            secure : process.env.NODE_ENV === 'development',
            sameSite : 'lax'
        }

        res.status(201).cookie("Token", token, cookieOptions).json({
            message: "User registered sucessfully!",
            success: true,
            User: {
                id: user._id,
                name: user.name,
                email: user.email,
                currency: user.currency,
                categories: user.categories
            }
        });
    } catch (error) {
        console.log("error :", error);
        res.status(500).json({ success: false, message: "server error, Please try again!" })
    }
}

module.exports = { userSignUp }