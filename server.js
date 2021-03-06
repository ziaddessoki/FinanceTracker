const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB();


const app = express();
//to be able to use body parser
app.use(express.json())

if (process.env.NODE_ENV == "development") {
    app.use(morgan('dev'))
}

app.use('/api/v1/user', require('./routes/users')),
    app.use('/api/v1/transactions', require('./routes/transactions'))
app.use('/api/v1/stocks', require('./routes/stocks'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} Mode on port ${PORT}`.yellow.bold));
