const express = require("express");
const app = express();
//  Import routers
const transaksiRoutes = require("./routes/transaksiRoutes");
const pelangganRoutes = require("./routes/pelangganRoutes");

//Import body parser for inserting data through body in postman
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./utils/association")

app.use("/transaksi", transaksiRoutes);
app.use("/pelanggan",pelangganRoutes)

app.listen(3000, () => console.log("Server running on port 3000"));
