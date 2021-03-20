const express = require('express');
const router = express.Router();
const finnhub = require('finnhub');
const axios = require('axios');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_APIKEY // Replace this
const finnhubClient = new finnhub.DefaultApi()

// console.log(process.env.FINNHUB_APIKEY)

// const stock = finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
//     console.log(data)
// });

// console.log(stock)

router.get("/", async (req, res) => {
    try {
        // const stock = await finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        //     console.log(data)
        // });

        const stock = await axios.get("https://finnhub.io/api/v1/search?q=apple&token=c19ur3n48v6te7ig0jng")
        console.log(stock)
        return res.status(200).json({
            success: true,
            luck: "non",
            count: stock.data.result.length,
            data: stock.data.result
        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
})


module.exports = router;