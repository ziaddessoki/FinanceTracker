const mongoose = require('mongoose')


const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add your text']
    },
    amount: {
        type: String,
        trim: true,
        required: [true, 'Please add your Email']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add your Name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please add your Email']
    },
    transactions: {
        type: [TransactionSchema],

    }
});

module.exports = mongoose.model('user', UserSchema);