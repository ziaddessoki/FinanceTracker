const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB();


const app = express();
//to be able to use body parser
app.use(express.json())

app.use('/api/v1/user', require('./routes/users')),
    app.use('/api/v1/transactions', require('./routes/transactions'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} Mode on port ${PORT}`.yellow.bold));
