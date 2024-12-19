// model/queryModel.js

const mongoose = require('mongoose');

// Define schema for queries
const querySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    query: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// Export the Query model
module.exports = mongoose.model('Query', querySchema);
