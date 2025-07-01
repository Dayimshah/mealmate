import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md">
      <Link to="/" className="font-bold text-xl">MealMate</Link>
      <div className="space-x-4">
        <Link to="/meals" className="hover:underline">Meals</Link>
        <Link to="/mealplan" className="hover:underline">Meal Plan</Link>
        <Link to="/order" className="hover:underline">Order</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}
