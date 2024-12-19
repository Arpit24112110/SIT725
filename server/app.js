const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createQuery } = require('../controller/queryController'); // Correct path to controller

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('view')); // Serve static files from the 'view' directory

// MongoDB Connection (Conditional for Testing)
if (process.env.NODE_ENV !== 'test') {
    const mongoURI = 'mongodb+srv://arpitmantri40:newpassword123454@cluster0.br1ss.mongodb.net/AppliedSE?retryWrites=true&w=majority';

    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected successfully'))
        .catch((err) => console.error('MongoDB connection error:', err));
}

// Routes
app.post('/queries', createQuery);

// Start Server (only if not in test mode)
if (process.env.NODE_ENV !== 'test') {
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app; // Export app for testing
