const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DataBase Connected!")
    } catch (error) {
        console.log("error", error)
    }
}

module.exports = connectDB;