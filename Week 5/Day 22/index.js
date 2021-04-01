// const dotenv = require("dotenv");
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");

// Connect to MongoDB

// Import router
const transaksiRoutes = require("./routes/transaksiRoutes");

// Configuration

// Make express app
const app = express();

// Enable body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Make routes
app.use("/transaksi", transaksiRoutes);

// Run server
app.listen(3000, () => console.log("server runnnig on 3000!"));
