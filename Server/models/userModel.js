const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"], trim: true },
    email: { type: String, required: [true, "Email is required"], unique: true, trim: true, lowercase: true, select : false },
    password: { type: String, required: [true, "Password is required"], minlength: 8 },
    currency: { type: String, defult: 'PKR', uppercase: true },
    preferences: {
        theme: { type: String, enum: ['light', 'dark', 'system'], default: 'system' },
        monthlyBudgetLimit: { type: Number, default: 0 }
    },
    categories: {
        income: { type: [String], default: ['Salary', 'Freelance', 'Investments', 'Other'] },
        expense: { type: [String], default: ['Food & Dining', 'Bills & Utilities', 'Shopping', 'Transportation', 'Entertainment', 'Health', 'Other'] }
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, {timestamps : true});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;