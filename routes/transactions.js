const express = require('express');
const router = express.Router();
const User = require('../models/user')

//@desc Get all Transactions
//@route GET /api/v1/transactions
//@access Public
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        // res.json(users)
        return res.status(200).json({
            success: true,
            count: user.transactions.length,
            data: user.transactions
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
});



///@desc  Add transaction
//@route POST /api/v1/transactions
//@access Public
router.post("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { text, amount } = req.body
        const newTrans = { text, amount }

        user.transactions.unshift(newTrans)
        await user.save()
        // res.json(users)
        return res.status(200).json({
            success: true,
            count: user.transactions.length,
            data: user.transactions
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
});


///@desc  Delete transactions
//@route POST /api/v1/user
//@access Public
router.delete("/:id/:tId", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const newList = user.transactions.filter(transaction => transaction._id != req.params.tId);

        user.transactions = newList

        await user.save()
        // return user.transactions
        return res.status(200).json({
            success: true,
            data: "Transaction Deleted!"
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});



module.exports = router;