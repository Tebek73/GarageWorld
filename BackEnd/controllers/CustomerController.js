const Customer = require('../models/Customer');

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find().populate('cars');
        res.status(200).json(customers);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

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

module.exports = {
    getAllCustomers,
    create,
    update,
    getById,
    deleteById
}; 