import Meal from '../models/Meal.js';

export const getMeals = async (req, res) => {
  const meals = await Meal.find();
  res.json(meals);
};

export const createMeal = async (req, res) => {
  const meal = await Meal.create(req.body);
  res.json(meal);
};
