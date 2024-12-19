// controller/queryController.js

const Query = require('../model/queryModel'); // Ensure the path is correct

// Handle submission of new queries
const createQuery = async (req, res) => {
    try {
        const { name, email, query } = req.body;

        // Create a new Query document
        const newQuery = new Query({ name, email, query });

        // Save the query to the database
        await newQuery.save();

        // Respond with a success message
        res.status(200).json({ message: `Thank you ${name}, we will reach out to you on ${email}` });
    } catch (error) {
        console.error('Error submitting query:', error);
        res.status(500).json({ message: 'Failed to submit query', error: error.message });
    }
};

// Export controller functions
module.exports = { createQuery };
