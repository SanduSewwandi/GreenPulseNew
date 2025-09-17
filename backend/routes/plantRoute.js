// routes/plantRoute.js
const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Route to register a plant
router.post('/register', plantController.registerPlant);
// Route to get all plants (GET)
router.get('/', plantController.getAllPlants);

// Route to get a specific plant by ID (GET)
router.get('/:id', plantController.getPlantById);
module.exports = router;
