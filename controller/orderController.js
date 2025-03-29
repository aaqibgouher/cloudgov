const { MESSAGE_CONSTANTS } = require("../utils/constants");
const Output = require("../utils/output");
const orderService = require("../service/orderService");

const addOrder = async (req, res) => {
  try {
    const data = await orderService.addOrder(req.body);

    return Output.success(
      res,
      MESSAGE_CONSTANTS.ORDERS_SUCCESSFULLY_ADD_ORDER,
      data
    );
  } catch (error) {
    console.log(error, "from error ---");
    return Output.error(res, error);
  }
};

const getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrders({});

    return Output.success(
      res,
      MESSAGE_CONSTANTS.ORDERS_SUCCESSFULLY_GET_ORDERS,
      data
    );
  } catch (error) {
    return Output.error(res, error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const data = await orderService.updateOrder({ ...req.params, ...req.body });

    return Output.success(
      res,
      MESSAGE_CONSTANTS.ORDERS_SUCCESSFULLY_UPDATED_ORDER,
      data
    );
  } catch (error) {
    return Output.error(res, error);
  }
};

module.exports = {
  addOrder,
  getOrders,
  updateOrder,
};
