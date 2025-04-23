const Part = require('../models/Part');

const getAllParts = async (req, res) => {
    try {
        const parts = await Part.find();
        res.status(200).json(parts);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const part = await Part.findOne({ _id: id });
        res.status(200).json(part);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const create = async(req,res) => {
    try {
        const part = new Part(req.body);
        const savedPart = part.save();
        res.status(200).json(savedPart);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const part = req.body;
        const updatedPart = await Part.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: part
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedPart);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        let deletedPart = await Part.deleteOne({ _id: id });
        res.status(200).json(deletedPart);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error });
    }
};

module.exports = {
    getAllParts,
    create,
    update,
    getById,
    deleteById
}; 