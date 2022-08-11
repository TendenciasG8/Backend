const ReniecBD = require("../models/ReniecBD");

exports.createReniecBD = async (req, res) => {

    try {
        let reniecBD;
        let dnic;
        // User creation
        reniecBD = new ReniecBD(req.body);
        dnic = await ReniecBD.findOne({ dni: req.body.dni });

        if(dnic) {
            res.status(401).json({ msg: 'DNI is already registered' })
        }else{
            await reniecBD.save();
            res.send(reniecBD);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getReniecBDByDni = async (req, res) => {

    try {
        let reniecBD = await ReniecBD.findOne({dni: req.params.dni});

        if(!reniecBD) {
            res.status(404).json({ msg: 'ReniecBD does not exist' })
        }
       
        res.json(reniecBD);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//ReniecBD get con find 
exports.getReniecBDs = async (req, res) => {

    try {

        const reniecBDs = await ReniecBD.find();
        res.json(reniecBDs)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}