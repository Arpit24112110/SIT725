const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importing CORS package

// Initialize Express app
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON data
app.use(bodyParser.json());

// MongoDB URI with the correct username, password, and database name
const mongoURI = 'mongodb+srv://arpitmantri40:newpassword123454@cluster0.br1ss.mongodb.net/AppliedSE?retryWrites=true&w=majority';

// Connect to MongoDB using mongoose
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define a schema for the query data (Name, Email, Query)
const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  query: String
});

// Create a model from the schema
const Query = mongoose.model('Query', querySchema);

// Handle POST request to save data
app.post('/submit-query', (req, res) => {
  const { name, email, query } = req.body;

  // Log incoming data
  console.log('Received data:', { name, email, query });

  // Create a new Query document
  const newQuery = new Query({
    name,
    email,
    query
  });

  // Save the query to the database
  newQuery.save()
    .then(() => {
      console.log('Query saved successfully');
      res.json({
        message: `Thank you ${name}, we will reach out to you on ${email}`
      });
    })
    .catch((err) => {
      console.error('Failed to submit query:', err);
      res.status(500).json({ message: 'Failed to submit query', error: err });
    });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
