const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

// GET: list
router.get('/', customerController.getAllCustomers);

// GET: get by id
router.get('/:id', customerController.getById);

// POST: create
router.post('/', customerController.create);

// PUT: update
router.put('/:id', customerController.update);

// DELETE: delete
router.delete('/:id', customerController.deleteById);

module.exports = router;