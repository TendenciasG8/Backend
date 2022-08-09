const Business = require("../models/Business");
const bcrypt = require("bcrypt");

exports.createBusiness = async (req, res) => {

    try {
        let business;
        let rucc;
        // Business creation
        business = new Business(req.body);
        rucc = await Business.findOne({ ruc: req.body.ruc });
        business.password = await Business.encryptPassword(business.password);

        if(rucc) {
            res.status(401).json({ msg: 'RUC is already registered' })
        }else{
            await business.save();
            res.send(business);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getBusinessByRuc = async (req, res) => {

    try {
        let business = await Business.findOne({ruc: req.params.ruc});

        if(!business) {
            res.status(404).json({ msg: 'Business does not exist' })
        }
       
        res.json(business);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}