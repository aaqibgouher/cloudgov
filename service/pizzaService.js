const pizzaRepository = require("../repositories/pizzaRepository");
const { MESSAGE_CONSTANTS } = require("../utils/constants");
const pizzaValidation = require("../validations/pizzaValidation");

const getPizzas = async (payload) => {
  // only active
  payload.isActive = true;

  return await pizzaRepository.getMany(payload);
};

const addPizza = async (payload) => {
  // validation
  const { error, value } = pizzaValidation.addPizza.validate(payload, {
    abortEarly: false,
  });

  if (error) {
    throw error.details[0];
  }

  return await pizzaRepository.add(payload);
};

const getPizza = async (payload) => {
  // validation
  const { error, value } = pizzaValidation.getPizza.validate(payload, {
    abortEarly: false,
  });

  if (error) {
    throw error.details[0];
  }

  return await pizzaRepository.getOne(payload.id);
};

const updatePizza = async (payload) => {
  // validation
  const { error, value } = pizzaValidation.updatePizza.validate(payload, {
    abortEarly: false,
  });

  if (error) {
    throw error.details[0];
  }

  //   check pizza by id
  const pizza = await pizzaRepository.updateOne(payload.id, payload);

  if (!pizza) throw MESSAGE_CONSTANTS.PIZZAS_NOT_FOUND_PIZZA;

  return pizza;
};

const deletePizza = async (payload) => {
  // validation
  const { error, value } = pizzaValidation.getPizza.validate(payload, {
    abortEarly: false,
  });

  if (error) {
    throw error.details[0];
  }

  //   check pizza by id
  const pizza = await pizzaRepository.updateOne(payload.id, {
    isActive: false,
  });

  if (!pizza) throw MESSAGE_CONSTANTS.PIZZAS_NOT_FOUND_PIZZA;

  return pizza;
};

module.exports = {
  getPizzas,
  addPizza,
  getPizza,
  updatePizza,
  deletePizza,
};
