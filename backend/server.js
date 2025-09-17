// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const plantRoutes = require('./routes/plantRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Parse JSON request bodies

// Routes
app.use('/api/plants', plantRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
