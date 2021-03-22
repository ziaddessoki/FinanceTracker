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

        const etf = finnhubClient.etfsProfile('spy');
        console.log(etf)
        // const stock = await axios.get("https://finnhub.io/api/v1/search?q=apple&token=c19ur3n48v6te7ig0jng")
        // console.log(stock)
        return res.status(200).json({
            success: true,
            luck: "non",
            // count: stock.data.result.length,
            // data: stock.data.result,
            etf: etf.explanation
        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
})

//@desc Get stock quote 
//@route GET /api/v1/stocks/quote
//@access Public
//sym = symbol 
//to use the middleware just add the file as a second paramter and route will be protected
router.get("/quote/:sym", async (req, res) => {
    try {
        const stock = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.params.sym}&apikey=${alpha_apiKey}`)
        return res.status(200).json({
            success: true,
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


//@desc Get stock time series 
//@route GET /api/v1/stocks/quote
//@access Public
//sym = symbol 
//timeSeries = [Daily,Weekly,monthly]
//to use the middleware just add the file as a second paramter and route will be protected
router.get("/timeseries/:sym/:time", async (req, res) => {
    try {
        const stock = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_${req.params.time}&symbol=${req.params.sym}&apikey=${alpha_apiKey}`)
        return res.status(200).json({
            success: true,
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

//@desc Get stock time series Intraday (for chart) 
//@route GET /api/v1/stocks
//@access Public
//sym = symbol 
//interval = [1,5,15,30,60]min
//to use the middleware just add the file as a second paramter and route will be protected
router.get("/intra/:sym/:int", async (req, res) => {
    try {

        const stock = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${req.params.sym}&interval=${req.params.int}min&apikey=${alpha_apiKey}`)

        return res.status(200).json({
            success: true,
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



//@desc Get company info
//@route GET /api/v1/stocks/company
//@access Public
//sym = symbol 
router.get("/company/:sym", async (req, res) => {
    try {
        const stock = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${req.params.sym}&apikey=${alpha_apiKey}`)
        return res.status(200).json({
            success: true,
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


//@desc Get crypto exchange rate (def. USD)
//@route GET /api/v1/stocks/crypto
//@access Public
//sym = symbol [btc,eth,ada, uni,doge,bnb]
router.get("/crypto/:sym", async (req, res) => {
    try {
        const stock = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${req.params.sym}&to_currency=USD&apikey=${alpha_apiKey}`)
        return res.status(200).json({
            success: true,
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


//@desc Get crypto chart
//@route GET /api/v1/stocks/crypto
//@access Public
//timeSeries = [Daily,Weekly,monthly]
//sym = symbol [btc,eth,ada, uni,doge,bnb]
router.get("/crypto/:sym/:time", async (req, res) => {
    try {
        const stock = await axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_${req.params.time}&symbol=${req.params.sym}&market=usd&apikey=${alpha_apiKey}`)
        const t = req.params.time
        const tCapitalized = t.charAt(0).toUpperCase() + t.slice(1)
        return res.status(200).json({
            success: true,
            count: Object.keys(stock.data[`Time Series (Digital Currency ${tCapitalized})`]).length,
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