const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: { type : String, trim : true, required : true },
    email: { type : String, required : true, unique : true, trim : true, lowercase : true, select: false },
    password: { type : String, required : true, minlength : 8 },
    preferences: {
        theme: { type: String, enum: ["light", "dark", "system"], default: "system" },
        currency: { type: String, default: "PKR" },
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, { timestamps: true });

userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
});

userSchema.methods.comparePassword = async function (plain) {
    return await bcrypt.compare(plain, this.password)
}

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;