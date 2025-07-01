import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-md">
      <Link to="/" className="font-bold text-lg sm:text-xl">MealMate</Link>
      <div className="flex flex-wrap gap-2 sm:space-x-4">
        <Link to="/meals" className="hover:underline">Meals</Link>
        <Link to="/mealplan" className="hover:underline">Meal Plan</Link>
        <Link to="/order" className="hover:underline">Order</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}
