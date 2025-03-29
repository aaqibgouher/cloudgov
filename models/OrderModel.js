const mongoose = require("mongoose");
const {
  MODEL_CONSTANTS,
  ORDER_STATUS_CONSTANTS,
} = require("../utils/constants");

const OrderDetailSchema = new mongoose.Schema({
  pizza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: MODEL_CONSTANTS.PIZZA.MODEL,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
  },
});

const OrderSchema = new mongoose.Schema(
  {
    pizzas: [OrderDetailSchema],
    status: {
      type: String,
      enum: [...Object.keys(ORDER_STATUS_CONSTANTS)],
      default: ORDER_STATUS_CONSTANTS.PENDING.value,
    },
  },
  { timestamps: true }
);

// modal
const OrderModel = mongoose.model(
  MODEL_CONSTANTS.ORDER.MODEL,
  OrderSchema,
  MODEL_CONSTANTS.ORDER.TABLE
);

// exporting
module.exports = OrderModel;
