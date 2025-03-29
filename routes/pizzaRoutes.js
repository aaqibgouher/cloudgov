const express = require("express");
const router = express.Router();
const pizzaController = require("../controller/pizzaController");

// get pizzas
router.get("/", pizzaController.getPizzas);

// add pizza
router.post("/", pizzaController.addPizza);

// get pizza by id
router.get("/:id", pizzaController.getPizza);

// update pizza by id
router.patch("/:id", pizzaController.updatePizza);

// delete pizza by id
router.delete("/:id", pizzaController.deletePizza);

module.exports = router;
