const express = require('express');
const router = express.Router();
const User = require('../models/users')

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
        //   const user = await User.findById(req.user.id).select("-password");
        //   res.json(user);
        res.send('Get users')
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
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
        //   const user = await User.findById(req.user.id).select("-password");
        //   res.json(user);
        res.send('Get user')
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
        res.send('Post User')
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


//@desc Delete User
//@route DELETE /api/v1/user/:id
//@access Public
router.delete("/:id", async (req, res) => {
    try {
        res.send('delete User')
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;