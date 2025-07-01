import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow bg-white/30 backdrop-blur-md dark:bg-gray-800/30">
      <Link to="/" className="font-bold text-2xl text-gray-900 dark:text-gray-100">
        MealMate
      </Link>
      <div className="flex space-x-6 text-gray-800 dark:text-gray-200 text-lg">
        <Link to="/meals" className="hover:text-green-600 transition">Meals</Link>
        <Link to="/mealplan" className="hover:text-green-600 transition">Meal Plan</Link>
        <Link to="/order" className="hover:text-green-600 transition">Order</Link>
        <Link to="/login" className="hover:text-green-600 transition">Login</Link>
      </div>
    </nav>
  );
}
