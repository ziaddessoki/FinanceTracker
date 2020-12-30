const express = require('express');
const router = express.Router();
const User = require('../models/user')

// const { getTransactions, addTransactions, deleteTransactions } = require('../routes/transactions')

// router.get('/', (req, res) => res.send("HELL YeaH!!!"));

//@desc Get all users
//@route GET /api/v1/user
//@access Public
//to use the middleware just add the file as a second paramter and route will be protected
router.get("/", async (req, res) => {
    try {
        //since its a protected route n we use the token that has the ID
        //in middleware we set the req.user to the user w/token
        // not returning password in json

        const users = await User.find()
        // res.json(users)
        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
});
//@desc Get user by id
//@route GET /api/v1/user/:id
//@access Public
//to use the middleware just add the file as a second paramter and route will be protected
router.get("/:id", async (req, res) => {
    try {
        //since its a protected route n we use the token that has the ID
        //in middleware we set the req.user to the user w/token
        // not returning password in json
        // const user = await User.findById(req.user.id);

        const user = await User.findById(req.params.id);
        return res.status(200).json({
            success: true,
            data: user
        })
        // res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

///@desc  Add user
//@route POST /api/v1/user
//@access Public
//to use the middleware just add the file as a second paramter and route will be protected
router.post("/", async (req, res) => {

    try {
        const { name, email, transactions } = req.body
        const user = await User.create(req.body)
        return res.status(201).json({
            success: true,
            data: user
        })
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(400).json({
                success: false,
                error: "Server Error"
            })
        }
    }
});


//@desc Delete User
//@route DELETE /api/v1/user/:id
//@access Public
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: "No User Found"
            })
        }
        await user.remove()
        return res.status(200).json({
            success: true,
            data: "User Removed"
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;