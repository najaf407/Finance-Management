const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    type : {
        type : String,
        enum : ['income', 'expense'],
        required : true
    },
    date : {
        type : Date,
        required : true,
        default : Date.now
    },
    note :  {
        type : String,
        trim : true,
        maxlength : 200
    }
},
{ timestamps : true }
)

transactionSchema.index({ user: 1, date: -1 })
transactionSchema.index({ user: 1, category: 1, date: -1 })

const transactionModel = mongoose.model('Transaction', transactionSchema)

module.exports = transactionModel