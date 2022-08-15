const DebtP = require("../models/DebtP");
const User = require("../models/User");
const Business = require("../models/Business");

exports.createDebtP = async (req, res) => {

    try {
        let debtP;
        let rucc;
        let rucbc;
        // DebtP creation
        debtP = new DebtP(req.body);
        rucc = await User.findOne({ ruc: req.body.ruc });
        rucbc = await Business.findOne({ ruc: req.body.ruc });

        if(!rucc || !rucbc) {
            await debtP.save();
            res.send(debtP);
        }else{
            res.status(401).json({ msg: 'RUC isnt registered' })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getDebtPsByRuc = async (req, res) => {

    try {
        let debtP = await DebtP.find({ruc: req.params.ruc, status: true}).sort({date_of_debt: -1 });

        if(!debtP) {
            res.status(404).json({ msg: 'DebtPs does not exist' })
        }
       
        res.json(debtP);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteDebtPs = async (req, res) => {

    try {
        let debtPs = await DebtP.find({ruc: req.params.ruc});
        if(!debtPs) {
            res.status(404).json({ msg: 'DebtPs does not exist' })
        }
        await DebtP.deleteMany({ruc: req.params.ruc});
        res.json({ msg: 'DebtPs successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//debts get con find 
exports.getDebtPs = async (req, res) => {

    try {

        const debts = await DebtP.find();
        res.json(debts)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getDebtPByOrder = async (req, res) => {

    try {
        let debtP = await DebtP.findOne({n_orderP: req.params.n_orderP});

        if(!debtP) {
            res.status(404).json({ msg: 'DebtP does not exist' })
        }
       
        res.json(debtP);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateDebtPState = async (req, res) => {

    try {
        let debtP = await DebtP.findOne({n_orderP: req.params.n_orderP});

        if(!debtP) {
            res.status(404).json({ msg: 'DebtP does not exist' })
        }else{
            debtP = await DebtP.findOneAndUpdate({n_orderP: req.params.n_orderP}, {status: false})
            res.json(debtP);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}