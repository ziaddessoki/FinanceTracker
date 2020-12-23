const firebase = require("firebase");

const connectDB = async () => {
    try {


        firebase.initializeApp({
            apiKey: process.env.APIKEY,
            authDomain: process.env.AUTHADMIN,
            databaseURL: process.env.DATABASEURL,
            storageBucket: process.env.STORAGEBUCKET
        })

        const conn = await firebase.database()

        console.log(`Firebase DATABASE Connected: ${conn.repoInternal_.repoInfo_.host}`.cyan.underline.bold)
        console.log(conn.repoInternal_.repoInfo_)

    } catch (err) {
        console.log(process.env.DATABASE)
        console.log(`Error: ${err.message}`.red);
        process.exit(1)


    }
}
module.exports = connectDB;