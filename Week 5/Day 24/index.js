require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express

const transaksiRoutes = require("./routes/transaksiRoutes");

const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(fileUpload());
app.use(express.static("public"));

app.use("/transaksi", transaksiRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
