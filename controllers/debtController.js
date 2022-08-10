const Debt = require("../models/Debt");
const User = require("../models/User");
const Business = require("../models/Business");

exports.createDebt = async (req, res) => {

    try {
        let debt;
        let rucc;
        let rucbc;
        // User creation
        debt = new Debt(req.body);
        rucc = await User.findOne({ ruc: req.body.ruc });
        rucbc = await Business.findOne({ ruc: req.body.ruc });

        if(!rucc || !rucbc ) {
            res.status(401).json({ msg: 'RUC isnt registered' })
        }else{
            await debt.save();
            res.send(debt);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getDebtsByRuc = async (req, res) => {

    try {
        let debt = await Debt.find({ruc: req.params.ruc}).sort({date_of_debt: -1 });

        if(!debt) {
            res.status(404).json({ msg: 'Debts does not exist' })
        }
       
        res.json(debt);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteDebts = async (req, res) => {

    try {
        let debts = await Debt.find({ruc: req.params.ruc});

        if(!debts) {
            res.status(404).json({ msg: 'Debts does not exist' })
        }
       
        await Debt.deleteMany({ruc: req.params.ruc})
        res.json({ msg: 'Debts successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}