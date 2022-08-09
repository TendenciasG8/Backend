const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const NodeRSA = require('node-rsa');

const BusinessSchema = mongoose.Schema({
    ruc: {
        type: String,
        required: true
    },
    password: {
        type: String,
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


BusinessSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

BusinessSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
  };

module.exports = mongoose.model('Business', UserSchema);