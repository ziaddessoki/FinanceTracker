const express = require('express');
const router = express.Router();
const finnhub = require('finnhub');
const axios = require('axios');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_APIKEY // Replace this
const finnhubClient = new finnhub.DefaultApi()

const alpha_apiKey = process.env.ALPHA_APIKEY


//@desc Get search for stocks 
//@route GET /api/v1/stocks
//@access Public
//to use the middleware just add the file as a second paramter and route will be protected
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


//@desc Get stock time series (for chart) 
//@route GET /api/v1/stocks
//@access Public
//to use the middleware just add the file as a second paramter and route will be protected
router.get("/alpha/:sym", async (req, res) => {
    try {
        // const stock = await finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        //     console.log(data)
        // });
        console.log(alpha_apiKey)
        const stock = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${req.params.sym}&interval=5min&apikey=${alpha_apiKey}`)
        console.log(stock)
        return res.status(200).json({
            success: true,
            Api: "alpha",
            count: stock.data.length,
            data: stock.data
        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
})


module.exports = router;