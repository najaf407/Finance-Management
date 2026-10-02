require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')
const CookieParser = require('cookie-parser');

connectDB();

const app = express();

app.use(express.json());
app.use(CookieParser());

app.use('/api/user', userRoutes)

app.listen(3000, ()=>{
    console.log("Server is Running!")
})