const mongoose = require('mongoose');


const CustomerSchema = mongoose.Schema(
    {
        surname:{
            type:String,
            required: true
        },

        name: {
             type:String,
             required:true
            
        },
        phone:[{
            type: String,
            required: true
        }],
        email:{
            type:String,
            required:true
        },
        cars: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Car'
        }],
        isActive:{
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;