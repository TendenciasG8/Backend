const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const NodeRSA = require('node-rsa');

const UserSchema = mongoose.Schema({
    dni: {
        type: Number,
        required: true
    },
    ruc: {
        type: String,
        required: true
    },
    password: {
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


UserSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
  };

module.exports = mongoose.model('User', UserSchema);