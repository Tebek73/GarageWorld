const mongoose = require('mongoose');

const ServiceHistorySchema = mongoose.Schema(
    {
        appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
            required: true
        },
        receptionNotes: String,
        operationsPerformed: String,
        durationMinutes:{
            type: Number,
            required: true,
            validate: {
                validator: (value) => value % 10 === 0,
                message: 'Durata trebuie sa fie multiplu de 10 minute'
            }
        }
    }
);
//
module.exports = mongoose.model('Service history', ServiceHistorySchema);