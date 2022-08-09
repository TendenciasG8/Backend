const User = require("../models/User");
const bcrypt = require("bcrypt");

//user get con find 
exports.login = async (req, res) => {

    try {
        let user = await User.findOne({ dni: req.body.dni });
        
        if(!user) {
            res.status(404).json({ msg: 'DNI does not exist' })
        }

        const comparison = await User.comparePassword(
            req.body.password,
            user.password
        );
        
        if(!comparison) {
            res.status(401).json({ msg: 'DNI does not match the password' })
        }
        
        res.json({ msg: 'Welcome' })

    } catch (error) {
        console.log(error);
    }
}