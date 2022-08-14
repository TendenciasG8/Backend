const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const NodeRSA = require('node-rsa');

const BusinessSchema = mongoose.Schema({
    ruc: {
        type: Number,
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
    card_number: {
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
BusinessSchema.statics.encryptCardNumber = async (card_number) => {
    const key = new NodeRSA({b: 1024});
    return await key.encrypt(card_number, 'base64');
  };
module.exports = mongoose.model('Business', BusinessSchema);