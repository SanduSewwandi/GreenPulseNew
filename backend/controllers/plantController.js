// controllers/plantController.js
const plantModel = require('../models/plantModel');

// Controller for registering a plant
exports.registerPlant = async (req, res) => {
  const { name, treeType, datePlanted, imageUrl, latitude, longitude } = req.body;

  try {
    // Validate input fields
    if (!name || !treeType || !datePlanted || !latitude || !longitude) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // Call the addPlant function to insert data into the database
    const result = await plantModel.addPlant(name, treeType, datePlanted, imageUrl, latitude, longitude);

    // Send response back to client
    res.status(201).json({
      message: 'Plant registered successfully!',
      plantId: result.insertId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering plant', error: error.message });
  }
};
// Controller for getting all plants
exports.getAllPlants = async (req, res) => {
  try {
    const plants = await plantModel.getPlants(); // Call the model function to get plants from DB

    if (plants.length === 0) {
      return res.status(404).json({ message: 'No plants found.' });
    }

    res.status(200).json(plants); // Return the list of plants
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching plants', error: error.message });
  }
};

// Controller for getting a specific plant by ID
exports.getPlantById = async (req, res) => {
  const { id } = req.params;

  try {
    const plant = await plantModel.getPlantById(id); // Call the model function to get a plant by ID

    if (!plant) {
      return res.status(404).json({ message: 'Plant not found.' });
    }

    res.status(200).json(plant); // Return the plant details
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching plant', error: error.message });
  }
};