const MODEL_CONSTANTS = {
  PIZZA: {
    MODEL: "PizzaModel",
    TABLE: "pizzas",
  },
  ORDER: {
    MODEL: "OrderModel",
    TABLE: "orders",
  },
};

const PIZZA_SIZES_CONSTANTS = {
  SMALL: {
    label: "Small",
    value: "SMALL",
  },
  MEDIUM: {
    label: "Medium",
    value: "MEDIUM",
  },
  LARGE: {
    label: "Large",
    value: "LARGE",
  },
};

const ORDER_STATUS_CONSTANTS = {
  PENDING: {
    label: "Penging",
    value: "PENDING",
  },
  PREPARING: {
    label: "Preparing",
    value: "PREPARING",
  },
  OUT_FOR_DELIEVERY: {
    label: "Out For Delievery",
    value: "OUT_FOR_DELIEVERY",
  },
  DELIEVERED: {
    label: "Delievered",
    value: "DELIEVERED",
  },
  CANCELLED: {
    label: "Cancelled",
    value: "CANCELLED",
  },
};

const MESSAGE_CONSTANTS = {
  // pizzas
  PIZZAS_SUCCESSFULLY_GET_PIZZAS: "Successfully get pizzas",
  PIZZAS_SUCCESSFULLY_ADD_PIZZA: "Successfully added pizza",
  PIZZAS_SUCCESSFULLY_GET_PIZZA: "Successfully get pizza",
  PIZZAS_SUCCESSFULLY_UPDATED_PIZZA: "Successfully updated pizza",
  PIZZAS_NOT_FOUND_PIZZA: "Pizza not found",
  PIZZAS_SUCCESSFULLY_DELETE_PIZZA: "Successfully deleted pizza",

  //   orders
  ORDERS_SUCCESSFULLY_ADD_ORDER: "Successfully added an order",
  ORDERS_SUCCESSFULLY_GET_ORDERS: "Successfully get orders",
  ORDERS_SUCCESSFULLY_UPDATED_ORDER: "Successfully updated order",
  ORDERS_NOT_FOUND_ORDER: "Order not found",
};

module.exports = {
  MODEL_CONSTANTS,
  PIZZA_SIZES_CONSTANTS,
  ORDER_STATUS_CONSTANTS,
  MESSAGE_CONSTANTS,
};
