const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

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

DebtSchema.plugin(AutoIncrement, {inc_field: 'n_order'});
module.exports = mongoose.model('Debt', DebtSchema);

//Deudas dentro del sistema de la sunat