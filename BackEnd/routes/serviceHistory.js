const express = require('express');
const router = express.Router();
const shController = require('../controllers/ServiceHistoryController');

// GET: list
router.get('/', shController.getAllHistory);

// GET: get by id
router.get('/:id',shController.getById);

// POST: create
router.post('/', shController.create);

// PUT: update
router.put('/:id', shController.update);

// DELETE: delete
router.delete('/:id', shController.deleteById);

module.exports = router;