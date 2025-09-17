// routes/plantRoute.js
const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Route to register a plant
router.post('/register', plantController.registerPlant);

module.exports = router;
