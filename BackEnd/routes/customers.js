const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

// GET: list
router.get('/', customerController.getAllCustomers);

// GET: get by id
router.get('/:id', customerController.getById);

// get pt masinile clientului respectiv
router.get('/:id/cars', customerController.getCarsOfCustomers);

// POST: create
router.post('/', customerController.create);

// PUT: update
router.put('/:id', customerController.update);

// DELETE: delete
router.delete('/:id', customerController.deleteById);

//activate/deactivate
router.patch('/:id/status', customerController.toggleStatus);

module.exports = router;