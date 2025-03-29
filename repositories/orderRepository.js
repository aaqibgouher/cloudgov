const { OrderModel } = require("../models");

const add = async (payload) => {
  return await OrderModel.create(payload);
};

const getMany = async (payload) => {
  return await OrderModel.find(payload).populate({
    path: "pizzas.pizza",
    select: "_id name",
  });
};

const updateOne = async (condition, data) => {
  return await OrderModel.findByIdAndUpdate(condition, data, { new: true });
};

module.exports = {
  add,
  getMany,
  updateOne,
};
