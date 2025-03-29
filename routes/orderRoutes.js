const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

// create order
router.post("/", orderController.addOrder);

// get orders
router.get("/", orderController.getOrders);

// update order
router.patch("/:id", orderController.updateOrder);

// export
module.exports = router;
