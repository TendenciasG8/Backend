const User = require("../models/User");
const bcrypt = require("bcrypt");
const NodeRSA = require('node-rsa');

exports.createUser = async (req, res) => {

    try {
        let user;
        let dnic;
        // User creation
        user = new User(req.body);
        dnic = await User.findOne({ dni: req.body.dni });
        user.password = await User.encryptPassword(user.password);
        user.card_number = await User.encryptCardNumber(user.card_number);

        if(dnic) {
            res.status(401).json({ msg: 'DNI is already registered' })
        }else{
            await user.save();
            res.send(user);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getUserByDni = async (req, res) => {

    try {
        let user = await User.findOne({dni: req.params.dni});

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getUserByRuc = async (req, res) => {

    try {
        let user = await User.findOne({ruc: req.params.ruc});

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//user get con find 
exports.getUsers = async (req, res) => {

    try {

        const users = await User.find();
        res.json(users)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}