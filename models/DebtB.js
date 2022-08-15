const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const DebtBSchema = mongoose.Schema({
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
    n_orderB: {
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

DebtBSchema.plugin(AutoIncrement, {inc_field: 'n_orderB'});
module.exports = mongoose.model('DebtB', DebtBSchema);

//Deudas en las BD  de los bancos del estado