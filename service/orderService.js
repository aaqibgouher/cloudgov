const orderValidation = require("../validations/orderValidation");
const orderRepository = require("../repositories/orderRepository");
const { MESSAGE_CONSTANTS } = require("../utils/constants");

const addOrder = async (payload) => {
  // validation
  const { error, value } = orderValidation.addOrder.validate(payload, {
    abortEarly: false,
  });

  if (error) {
    throw error.details[0];
  }

  return await orderRepository.add(payload);
};

const getOrders = async (payload) => {
  return await orderRepository.getMany(payload);
};

const updateOrder = async (payload) => {
  // validation
  const { error, value } = orderValidation.updateOrder.validate(payload, {
    abortEarly: false,
  });

  if (error) {
    throw error.details[0];
  }

  //   check order by id
  const order = await orderRepository.updateOne(payload.id, payload);

  if (!order) throw MESSAGE_CONSTANTS.ORDERS_NOT_FOUND_ORDER;

  return order;
};

module.exports = {
  addOrder,
  getOrders,
  updateOrder,
};
