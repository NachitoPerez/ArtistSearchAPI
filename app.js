const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());

// Routes
const artistRouter = require("./routes/artistRoutes");

app.use("/artists", artistRouter);

module.exports = app;
