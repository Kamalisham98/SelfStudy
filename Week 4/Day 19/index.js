const express = require("express");
const app = express();

//Import transaksi routes
const transaksiRoutes = require("./routes/transaksiRoutes");
// Use to read req.body
app.use(express.urlencoded({ extended: true }));

// Import routes
app.use("/transaksi", transaksiRoutes);

//  server running on port 3000
app.listen(3000, () => console.log("Server running on 3000"));
