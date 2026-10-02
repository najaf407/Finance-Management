const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Please enter both email & password"
            })
        };

        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }

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
            message: "Logged in sucessfully!",
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

module.exports = { userLogin }