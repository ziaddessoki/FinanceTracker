const firebase = require("firebase");
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
        // const x = 'mongodb+srv://ziad:zee123@cluster0.j89oq.mongodb.net/financeTracker'
        // const conn = await mongoose.connect(x, {
        //     userNewUrlParser: true,
        //     userCreateIndex: true,
        //     userUnifiedTopology: true,
        // })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold)

    } catch (err) {
        console.log(process.env.DATABASE)
        console.log(`Error: ${err.message}`.red);
        process.exit(1)


    }
}
module.exports = connectDB;