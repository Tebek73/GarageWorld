const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  contactMethod: {
    type: String,
    enum: ['email', 'telefon', 'in_persoana'],
    required: true
  },
  actionDescription: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startHour: {
    type: String, // de forma "09:00", "10:30"
    required: true,
    validate: {
      validator: (val) => {
        const allowedTimes = [
          '08:00', '08:30', '09:00', '09:30',
          '10:00', '10:30', '11:00', '11:30',
          '12:00', '12:30', '13:00', '13:30',
          '14:00', '14:30', '15:00', '15:30',
          '16:00', '16:30'
        ];
        return allowedTimes.includes(val);
      },
      message: 'Ora de start trebuie sa fie din intervalul 08:00 - 17:00, din 30 in 30 de minute.'
    }
  },
  status: {
    type: String,
    enum: ['in_asteptare', 'confirmata', 'finalizata'],
    default: 'in_asteptare'
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
