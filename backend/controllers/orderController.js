// For demo: in-memory orders
const orders = [];

const getOrders = (req, res) => {
  res.json(orders);
};

const placeOrder = (req, res) => {
  const { userId, mealId, quantity } = req.body;
  const order = { id: Date.now().toString(), userId, mealId, quantity };
  orders.push(order);
  res.status(201).json({ message: 'Order placed', order });
};

module.exports = { getOrders, placeOrder };
