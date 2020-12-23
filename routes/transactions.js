const express = require('express');
const router = express.Router();
// const { getTransactions, addTransactions, deleteTransactions } = require('../routes/transactions')

// router.get('/', (req, res) => res.send("HELL YeaH!!!"));

//@desc Get all transactions
//@route GET /api/v1/transactions
//@access Public
//to use the middleware just add the file as a second paramter and route will be protected
router.get("/", async (req, res) => {
    try {
        //since its a protected route n we use the token that has the ID
        //in middleware we set the req.user to the user w/token
        // not returning password in json
        //   const user = await User.findById(req.user.id).select("-password");
        //   res.json(user);
        res.send('Get Transactions')
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

///@desc  Add transaction
//@route POST /api/v1/transactions
//@access Public
//to use the middleware just add the file as a second paramter and route will be protected
router.post("/", async (req, res) => {
    try {
        res.send('Post Transactions')
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


//@desc Delete transactions
//@route DELETE /api/v1/transactions/:id
//@access Public
router.delete("/:id", async (req, res) => {
    try {
        res.send('delete Transactions')
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;