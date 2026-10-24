require('dotenv').config();
const express = require("express");
const connectDB = require("./src/config/db");
const userRoutes = require('./src/routes/auth.routes')
const categoryRoutes = require('./src/routes/category.routes')
const CookieParser = require('cookie-parser');
const errorHandler = require('./src/middlewares/error.middleware');

connectDB();

const app = express();

app.use(express.json());
app.use(CookieParser());

app.use('/api/user', userRoutes)
app.use('/api/category', categoryRoutes)

app.use(errorHandler);

app.listen(3000, ()=>{
    console.log("Server is Running!")
})