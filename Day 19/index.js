const express = require("express");
const app = express();

// Import routes

// Use to read req.body
app.use(express.urlencoded({extended: true}));

//  server running on port 3000
app.listen(3000, ()=> console.log("Server running on 3000"));