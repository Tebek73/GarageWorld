const Customer = require('../models/Customer');
const Car = require('../models/Car');

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find().populate('cars');
        res.status(200).json(customers);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const getCarsOfCustomers = async (req,res) => {
    try {
        const customerId = req.params.id;
        const cars = await Car.find({ ownerId: customerId });
        res.status(200).json(cars);
    }
    catch(error){
        res.status(500).json({ message: "An error occured", error: error});
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const customer = await Customer.findOne({ _id: id }).populate('cars');
        res.status(200).json(customer);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const create = async(req,res) => {
    try {
        const customer = new Customer(req.body);
        const savedCustomer = customer.save();
        res.status(200).json(savedCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const customer = req.body;
        const updatedCustomer = await Customer.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: customer
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        let deletedCustomer = await Customer.deleteOne({ _id: id });
        res.status(200).json(deletedCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const toggleStatus = async (req,res) => {
    try{
        const customer = await Customer.findById(req.params.id);
        if(!customer) return res.status(404).json({message: "Not found" });

        customer.isActive = !customer.isActive;
        await customer.save();
        res.json({message: "Starea clientului a fost modificata"});
    }
    catch(error){
        res.status(500).json({message: "Error ", error: error});
    }
}

module.exports = {
    getAllCustomers,
    getCarsOfCustomers,
    create,
    update,
    getById,
    deleteById,
    toggleStatus
}; 