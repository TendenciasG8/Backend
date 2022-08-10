const mongoose = require('mongoose');

const DebtSchema = mongoose.Schema({
    ruc: {
        type: Number,
        required: true
    },
    date_of_debt: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    updated_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Debt', DebtSchema);