//@desc Get all transactions
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions = (req, res, next) => {
    res.send('Get Transactions')
}

//@desc  Add transaction
//@route POST /api/v1/transactions
//@access Public
exports.addTransactions = (req, res, next) => {
    res.send('Add Transaction')
}


//@desc Delete transactions
//@route DELETE /api/v1/transactions/:id
//@access Public
exports.DeleteTransactions = (req, res, next) => {
    res.send('DELETE Transactions')
}