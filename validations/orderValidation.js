const Joi = require("joi");
const { ORDER_STATUS_CONSTANTS } = require("../utils/constants");

const addOrder = Joi.object({
  pizzas: Joi.array()
    .items(
      Joi.object({
        pizza: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required()
          .messages({
            "string.pattern.base": "ID must be a valid MongoDB ObjectId",
            "any.required": "Pizza ID is required",
          }),
        qty: Joi.number().min(1).default(1).optional(), // Default 1 if not provided, minimum 1 if provided
      })
    )
    .min(1) // Ensure at least one pizza is ordered
    .required(),
});

const updateOrder = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/) // MongoDB ObjectId regex
    .required()
    .messages({
      "string.pattern.base": "ID must be a valid MongoDB ObjectId",
      "any.required": "Order ID is required",
    }),
  status: Joi.string()
    .valid(...Object.keys(ORDER_STATUS_CONSTANTS))
    .required()
    .messages({
      "any.required": "Order status is required",
      "any.only": "Invalid order status",
    }),
});

module.exports = {
  addOrder,
  updateOrder,
};
