const Debt = require("../models/Debt");
const User = require("../models/User");
const Business = require("../models/Business");

exports.createDebt = async (req, res) => {

    try {
        let debt;
        let rucc;
        let rucbc;
        // Debt creation
        debt = new Debt(req.body);
        rucc = await User.findOne({ ruc: req.body.ruc });
        rucbc = await Business.findOne({ ruc: req.body.ruc });

        if(!rucc || !rucbc) {
            await debt.save();
            res.send(debt);
        }else{
            res.status(401).json({ msg: 'RUC isnt registered' })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getDebtsByRuc = async (req, res) => {

    try {
        let debt = await Debt.find({ruc: req.params.ruc, status: true}).sort({date_of_debt: -1 });

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
        await Debt.deleteMany({ruc: req.params.ruc});
        res.json({ msg: 'Debts successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

//debts get con find 
exports.getDebts = async (req, res) => {

    try {

        const debts = await Debt.find();
        res.json(debts)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getDebtByOrder = async (req, res) => {

    try {
        let debt = await Debt.findOne({n_order: req.params.n_order});

        if(!debt) {
            res.status(404).json({ msg: 'Debt does not exist' })
        }
       
        res.json(debt);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateDebtState = async (req, res) => {

    try {
        let debt = await Debt.findOne({n_order: req.params.n_order});

        if(!debt) {
            res.status(404).json({ msg: 'Debt does not exist' })
        }else{
            debt = await Debt.findOneAndUpdate({n_order: req.params.n_order}, {status: false})
            res.json(debt);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}