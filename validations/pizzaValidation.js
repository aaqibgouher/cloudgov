const Joi = require("joi");
const { PIZZA_SIZES_CONSTANTS } = require("../utils/constants");

// add pizza
const addPizza = Joi.object({
  name: Joi.string().trim().min(2).max(50).required(),
  description: Joi.string().trim().max(255).optional(),
  toppings: Joi.array().items(Joi.string().trim().max(30)).optional(),
  sizes: Joi.array()
    .items(
      Joi.object({
        size: Joi.string()
          .valid(...Object.keys(PIZZA_SIZES_CONSTANTS))
          .required(),
        price: Joi.number().min(50).required(),
      })
    )
    .min(1)
    .required(),
});

// get pizza
const getPizza = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/) // MongoDB ObjectId regex
    .required()
    .messages({
      "string.pattern.base": "ID must be a valid MongoDB ObjectId",
      "any.required": "Pizza ID is required",
    }),
});

// update pizza
const updatePizza = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/) // MongoDB ObjectId regex
    .required()
    .messages({
      "string.pattern.base": "ID must be a valid MongoDB ObjectId",
      "any.required": "Pizza ID is required",
    }),
  name: Joi.string().trim().min(2).max(50).required(),
  description: Joi.string().trim().max(255).optional(),
  toppings: Joi.array().items(Joi.string().trim().max(30)).optional(),
  sizes: Joi.array()
    .items(
      Joi.object({
        size: Joi.string()
          .valid(...Object.keys(PIZZA_SIZES_CONSTANTS))
          .required(),
        price: Joi.number().min(50).required(),
      })
    )
    .min(1)
    .required(),
});

module.exports = {
  addPizza,
  getPizza,
  updatePizza,
};
