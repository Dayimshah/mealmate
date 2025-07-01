// For demo: simple hardcoded meals
const meals = [
  { id: 1, title: 'Grilled Chicken', price: 10 },
  { id: 2, title: 'Veggie Bowl', price: 8 }
];

const getMeals = (req, res) => {
  res.json(meals);
};

module.exports = { getMeals };
