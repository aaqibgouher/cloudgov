const { PizzaModel } = require("../models");

const getMany = async (payload) => {
  return await PizzaModel.find(payload);
};

const add = async (payload) => {
  return await PizzaModel.create(payload);
};

const getOne = async (id) => {
  return await PizzaModel.findById(id);
};

const updateOne = async (condition, data) => {
  return await PizzaModel.findByIdAndUpdate(condition, data, { new: true });
};

module.exports = {
  getMany,
  add,
  getOne,
  updateOne,
};
