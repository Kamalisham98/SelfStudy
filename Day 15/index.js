const express = require("express");
const app = express();
const helloRouter = require("./routers/helloRouter");

app.use("/", helloRouter);
app.listen(3000, () => console.log("Server Running 3000"));