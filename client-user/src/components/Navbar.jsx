import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white/30 backdrop-blur-md dark:bg-gray-800/30">
      <Link to="/" className="flex items-center space-x-2">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq5-lbpfsvYzZoLcUhx_7rHRxeZMaufdvhA&s" 
          alt="MealMate Logo" 
          className="h-10 w-auto rounded" 
        />
        <span className="font-bold text-2xl text-gray-900 dark:text-gray-100">MealMate</span>
      </Link>
      <div className="flex space-x-4 text-gray-800 dark:text-gray-100">
        <Link to="/meals" className="hover:text-orange-500">Meals</Link>
        <Link to="/mealplan" className="hover:text-orange-500">Meal Plan</Link>
        <Link to="/order" className="hover:text-orange-500">Order</Link>
        <Link to="/login" className="hover:text-orange-500">Login</Link>
      </div>
    </nav>
  );
}
