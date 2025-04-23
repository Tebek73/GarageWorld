const mongoose = require('mongoose');

const PartSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    partNumber:{
        type: String,
        required: true
    },
    manufacturer:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    isActive:{
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Part', PartSchema);