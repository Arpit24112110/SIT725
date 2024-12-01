const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, "../client")));

// Basic API Endpoint
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
