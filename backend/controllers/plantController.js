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
