const DebtB = require("../models/DebtB");
const User = require("../models/User");
const Business = require("../models/Business");

exports.createDebtB = async (req, res) => {

    try {
        let debtB;
        let rucc;
        let rucbc;
        // DebtB creation
        debtB = new DebtB(req.body);
        rucc = await User.findOne({ ruc: req.body.ruc });
        rucbc = await Business.findOne({ ruc: req.body.ruc });

        if(!rucc || !rucbc) {
            await debtB.save();
            res.send(debtB);
        }else{
            res.status(401).json({ msg: 'RUC isnt registered' })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getDebtBsByRuc = async (req, res) => {

    try {
        let debtB = await DebtB.find({ruc: req.params.ruc}).sort({date_of_debt: -1 });

        if(!debtB) {
            res.status(404).json({ msg: 'Debts does not exist' })
        }
       
        res.json(debtB);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteDebtBs = async (req, res) => {

    try {
        let debtBs = await DebtB.find({ruc: req.params.ruc});
        if(!debtBs) {
            res.status(404).json({ msg: 'Debts does not exist' })
        }
        await DebtB.deleteMany({ruc: req.params.ruc});
        res.json({ msg: 'DebtBs successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//debts get con find 
exports.getDebtBs = async (req, res) => {

    try {

        const debtBs = await DebtB.find();
        res.json(debtBs)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}