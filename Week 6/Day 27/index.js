require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

//Import Routes
const transaksiRoutes = require("./routes/transaksiRoutes");
const pelangganRoutes = require("./routes/pelangganRoutes");
const authRoutes = require("./routes/authRoutes");

const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

// to import parameter using body-parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(fileUpload());
app.use(express.static("public"));

//connect ruoter with port
app.use("/auth", authRoutes);
app.use("/transaksi", transaksiRoutes);
app.use("/pelanggan", pelangganRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
