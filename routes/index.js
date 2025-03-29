const express = require("express");
const router = express.Router();

// routes
const pizzaRoutes = require("./pizzaRoutes");
const orderRoutes = require("./orderRoutes");

// grouping
router.use("/pizzas", pizzaRoutes);
router.use("/orders", orderRoutes);

// export
module.exports = router;
