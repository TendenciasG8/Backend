const mongoose = require('mongoose');

const TributeSchema = mongoose.Schema({
    code: {
        type: Number,
        required: true
    },
    description: {
        type: String,
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

module.exports = mongoose.model('Tribute', TributeSchema);