const Business = require("../models/Business");
const bcrypt = require("bcrypt");

//business get con find 
exports.login = async (req, res) => {

    try {
        let business = await Business.findOne({ ruc: req.body.ruc });
        
        if(!business) {
            res.status(404).json({ msg: 'RUC does not exist' })
        }

        const comparison = await Business.comparePassword(
            req.body.password,
            business.password
        );
        
        if(!comparison) {
            res.status(401).json({ msg: 'RUC does not match the password' })
        }
        
        res.json({ msg: 'Welcome' })

    } catch (error) {
        console.log(error);
    }
}