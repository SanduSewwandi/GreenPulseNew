// models/plantModel.js
const db = require('../config/database');  // Your MySQL connection

// Function to add a new plant to the database
const addPlant = (name, treeType, datePlanted, imageUrl, latitude, longitude) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO plants (name, tree_type, date_planted, image_url, latitude, longitude)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [name, treeType, datePlanted, imageUrl, latitude, longitude], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
// Function to get all plants from the database
const getPlants = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM plants'; // SQL query to fetch all plants

    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result); // Return the result (list of plants)
      }
    });
  });
};

// Function to get a specific plant by ID from the database
const getPlantById = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM plants WHERE id = ?'; // SQL query to fetch a plant by ID

    db.query(query, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]); // Return the plant (first result)
      }
    });
  });
};

module.exports = {
  addPlant,
  getPlants,
  getPlantById
};