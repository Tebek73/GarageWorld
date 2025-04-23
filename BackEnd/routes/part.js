const express = require('express');
const router = express.Router();
const partController = require('../controllers/PartController');

// GET: list
router.get('/', partController.getAllParts);

// GET: get by id
router.get('/:id', partController.getById);

// POST: create
router.post('/', partController.create);

// PUT: update
router.put('/:id', partController.update);

// DELETE: delete
router.delete('/:id', partController.deleteById);

module.exports = router;