const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, "../client")));

app.listen(PORT, () => {
    console.log(`CasanovA Motors is running at http://localhost:${PORT}`);
});
