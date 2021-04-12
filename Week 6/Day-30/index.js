require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

// Express
const express = require("express");
const fileUpload = require("express-fileupload");

// Import routes
const authRoute = require("./routes/authRoute");
const transaksiRoute = require("./routes/transaksiRoute");
const barangRoute = require("./routes/barangRoute");

// Make express app
const app = express();

// to import parameter using Body-parser (to read req.body)
app.use(express.json()); // Enable req.body JSON type
app.use(
  express.urlencoded({
    extended: true,
  })
); // Support urlencode body

// To read form-data request
app.use(fileUpload());

// Set static file directory
app.use(express.static("public"));

// Make routes
app.use("/auth", authRoute);
app.use("/barang", barangRoute);
app.use("/transaksi", transaksiRoute);

// if environment is not test
if (process.env.NODE_ENV !== "test") {
  // running server
  app.listen(3000, () => console.log("Server running on 3000"));
}

// export for unit testing
module.exports = app;