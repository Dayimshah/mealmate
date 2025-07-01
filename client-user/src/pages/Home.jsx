import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-8 space-y-6 bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 dark:text-green-400">🍽 Welcome to MealMate</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl text-base sm:text-lg">Discover chef‑curated meals & AI‑powered meal plans tailored just for you.</p>
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        alt="Delicious food"
        className="rounded-2xl shadow-xl w-full max-w-2xl object-cover"
      />
      <Link to="/meals">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:scale-105 transition">
          Browse Meals
        </button>
      </Link>
    </div>
  );
}
