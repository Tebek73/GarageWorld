const mongoose = require('mongoose');

const CarSchema = mongoose.Schema(
    {
        ownerId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true 
        },
        registrationNumber:{
            type: String,
            required: true
        },
        chassisSeries:{
            type: String,
            required: true
        },
        brand:{
            type: String,
            required: true
        },
        model:{
            type: String,
            required: true
        },
        yearOfManufacture:{
            type: Number,
            required: true
        },
        engineType:{
            type: String,
            enum: ['motorina','benzina','hibrid','electric'],
            required: true
        },
        engineCapacity:{
            type: Number,
            required: true
        },
        horsepower:{ 
            type: Number,
            required: true
        },
        kw:{
            type: Number
        }
    },
    {
        timestamps: true
    }
);

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;