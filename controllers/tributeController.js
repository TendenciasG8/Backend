const Tribute = require("../models/Tribute");

exports.createTribute = async (req, res) => {

    try {
        let tribute;
        let codec;
        // Tribute creation
        tribute = new Tribute(req.body);
        codec = await Tribute.findOne({ code: req.body.code });

        if(!codec) {
            await tribute.save();
            res.send(tribute);
        }else{
            res.status(401).json({ msg: 'Tribute is already registered' })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getTributeByCode = async (req, res) => {

    try {
        let tribute = await Tribute.findOne({code: req.params.code});

        if(!tribute) {
            res.status(404).json({ msg: 'Tribute does not exist' })
        }
       
        res.json(tribute);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//tribute get con find 
exports.getTributes = async (req, res) => {

    try {

        const tributes = await Tribute.find();
        res.json(tributes)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}