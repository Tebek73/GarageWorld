const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/AppointmentController');

// GET: list
router.get('/', appointmentController.getAllAppointments);

// GET: get by id
router.get('/:id', appointmentController.getById);

// POST: create
router.post('/', appointmentController.create);

// PUT: update
router.put('/:id', appointmentController.update);

// DELETE: delete
router.delete('/:id', appointmentController.deleteById);

module.exports = router;