const ServiceHistory = require('../models/ServiceHistory');

const getAllHistory = async (req, res) => {
    try {
        const sh = await ServiceHistory.find().populate('appointmentId');
        res.status(200).json(sh);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

const create = async (req, res) => {
    try {
        const sh = new ServiceHistory(req.body);
        await sh.save();
        res.status(200).json(sh);
    } catch (err) {
        res.status(400).json({ message: 'Invalid data', error: err });
    }
};

const getById = async (req,res) =>{
    try {
            const id = req.params.id;
            const sh = await ServiceHistory.findOne({_id: id}).populate('appointmentId');
            res.status(200).json(sh);
    } catch (err) {
            res.status(500).json({ message: 'Server error', error: err });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const sh = req.body;
        const updatedSH = await ServiceHistory.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: sh
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedSH);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        let deletedSH = await ServiceHistory.deleteOne({ _id: id });
        res.status(200).json(deletedSH);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const deleteByAppointmentId = async (appointmentId) => {
    try{
        const result = await ServiceHistory.deleteOne({ appointmentId: appointmentId});
        console.log("Deleted history for appointment " + appointmentId);
    }
    catch(error){
        console.log("Operation didn't work");
        console.error(error);
        throw error;
    }
}

module.exports = {
    getAllHistory,
    create,
    update,
    getById,
    deleteById,
    deleteByAppointmentId
}; 