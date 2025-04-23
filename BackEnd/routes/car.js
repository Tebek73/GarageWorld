const express = require('express');
const router = express.Router();
const carController = require('../controllers/CarController');

// GET: list
router.get('/', carController.getAllCars);

// GET: get by id
router.get('/:id',carController.getById);

// POST: create
router.post('/', carController.create);

// PUT: update
router.put('/:id', carController.update);

// DELETE: delete
router.delete('/:id', carController.deleteById);

module.exports = router;