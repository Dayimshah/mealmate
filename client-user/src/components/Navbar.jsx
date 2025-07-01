import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white/30 backdrop-blur-md dark:bg-gray-800/30">
      <Link to="/" className="font-bold text-xl">MealMate</Link>
      <div className="space-x-4">
        <Link to="/meals">Meals</Link>
        <Link to="/mealplan">Meal Plan</Link>
        <Link to="/order">Order</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
