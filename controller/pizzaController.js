const { MESSAGE_CONSTANTS } = require("../utils/constants");
const Output = require("../utils/output");
const pizzaService = require("../service/pizzaService");

const getPizzas = async (req, res) => {
  try {
    const data = await pizzaService.getPizzas({});

    return Output.success(
      res,
      MESSAGE_CONSTANTS.PIZZAS_SUCCESSFULLY_GET_PIZZAS,
      data
    );
  } catch (error) {
    return Output.error(res, error);
  }
};

const addPizza = async (req, res) => {
  try {
    const data = await pizzaService.addPizza(req.body);

    return Output.success(
      res,
      MESSAGE_CONSTANTS.PIZZAS_SUCCESSFULLY_ADD_PIZZA,
      data
    );
  } catch (error) {
    return Output.error(res, error);
  }
};

const getPizza = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await pizzaService.getPizza({ id });

    return Output.success(
      res,
      MESSAGE_CONSTANTS.PIZZAS_SUCCESSFULLY_GET_PIZZA,
      data
    );
  } catch (error) {
    return Output.error(res, error);
  }
};

const updatePizza = async (req, res) => {
  try {
    const data = await pizzaService.updatePizza({ ...req.params, ...req.body });

    return Output.success(
      res,
      MESSAGE_CONSTANTS.PIZZAS_SUCCESSFULLY_UPDATED_PIZZA,
      data
    );
  } catch (error) {
    return Output.error(res, error);
  }
};

const deletePizza = async (req, res) => {
  try {
    const data = await pizzaService.deletePizza({ ...req.params });

    return Output.success(
      res,
      MESSAGE_CONSTANTS.PIZZAS_SUCCESSFULLY_DELETE_PIZZA,
      data
    );
  } catch (error) {
    return Output.error(res, error);
  }
};

module.exports = {
  getPizzas,
  addPizza,
  getPizza,
  updatePizza,
  deletePizza,
};
