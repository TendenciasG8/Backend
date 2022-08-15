const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const DebtPSchema = mongoose.Schema({
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
    n_order: {
        type: Number
    },
    status: {
        type: Boolean,
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

DebtPSchema.plugin(AutoIncrement, {inc_field: 'n_orderP'});
module.exports = mongoose.model('DebtP', DebtPSchema);

//Deudas en las instituciones públicas