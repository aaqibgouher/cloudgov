const express = require("express");
require("dotenv").config();
const router = require("./routes");

// db configs
require("./database");
require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
