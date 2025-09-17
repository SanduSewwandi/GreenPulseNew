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

module.exports = {
  addPlant
};
