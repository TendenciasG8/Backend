const mongoose = require('mongoose');

const ReniecBDSchema = mongoose.Schema({
    dni: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname_p: {
        type: String,
        required: true
    },
    lastname_m: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
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

module.exports = mongoose.model('ReniecBD', ReniecBDSchema);