import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
};