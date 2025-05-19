const Car = require('../models/Car');
const Customer = require('../models/Customer');

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find().populate('ownerId');
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

const create = async (req, res) => {
    try {
        const car = new Car(req.body);
        const savedCar = await car.save();

        await Customer.findByIdAndUpdate(
            car.ownerId,
            {
                $push: { cars: savedCar._id}
            },
            {
                new: true
            }
        );

        res.status(200).json(savedCar);
    } catch (err) {
        res.status(400).json({ message: 'Invalid data', error: err });
    }
};

const getById = async (req,res) =>{
    try {
            const id = req.params.id;
            const car = await Car.findOne({_id: id}).populate('ownerId');
            res.status(200).json(car);
    } catch (err) {
            res.status(500).json({ message: 'Server error', error: err });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const car = req.body;
        const updatedCar = await Car.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: car
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedCar);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        let deletedCar = await Car.deleteOne({ _id: id });
        res.status(200).json(deletedCar);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const deleteCarsOfCustomer = async (customerId) => {
    try{
        const result = await Car.deleteMany({ ownerId: customerId});
        console.log("Deleted " + result.deletedCount + " cars of customer " + customerId);
    }
    catch(error){
        console.error("Failed to delete cars because " + error);
        throw error;
    }
};

module.exports = {
    getAllCars,
    create,
    update,
    getById,
    deleteById,
    deleteCarsOfCustomer
}; 