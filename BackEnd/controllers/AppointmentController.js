const Appointment = require('../models/Appointment');

const getAllAppointments = async (req,res) =>{
    try {
        const appointments = await Appointment.find().populate('customer').populate('car');
        res.status(200).json(appointments);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

const getById = async (req,res) =>{
    try {
        const id = req.params.id;
        const appointment = await Appointment.findOne({_id: id}).populate('customer').populate('car');
        res.status(200).json(appointment);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

const create = async(req,res) => {
    try {

        //verific sa nu fie luata deja ora de programare
        const { customer, car, date, startHour} = req.body;
        const existingAppointment = await Appointment.findOne({ date, startHour});

        if(existingAppointment){
            return res.status(400).json({ message: 'Ora selectata este deja ocupata'});
        }
        //altfel creez
        const appointment = new Appointment(req.body);
        const savedAppointment = appointment.save();
        res.status(200).json(savedAppointment);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const appointment = req.body;
        const updatedAppointment = await Appointment.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: appointment
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedAppointment);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        let deletedAppointment = await Appointment.deleteOne({ _id: id });
        res.status(200).json(deletedAppointment);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

module.exports = {
    getAllAppointments,
    create,
    update,
    getById,
    deleteById
}; 