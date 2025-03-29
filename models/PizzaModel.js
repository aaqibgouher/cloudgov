const mongoose = require("mongoose");
const {
  MODEL_CONSTANTS,
  PIZZA_SIZES_CONSTANTS,
} = require("../utils/constants");

const PizzaSizeSchema = new mongoose.Schema({
  size: {
    type: String,
    enum: Object.keys(PIZZA_SIZES_CONSTANTS),
    required: true,
  },
  price: { type: Number, required: true, min: 50 },
});

// schema
const PizzaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    toppings: [{ type: String }],
    sizes: [PizzaSizeSchema],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// modal
const PizzaModel = mongoose.model(
  MODEL_CONSTANTS.PIZZA.MODEL,
  PizzaSchema,
  MODEL_CONSTANTS.PIZZA.TABLE
);

// exporting
module.exports = PizzaModel;
