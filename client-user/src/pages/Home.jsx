import React from 'react';

export default function Home() {
  return (
    <div className="text-center p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4">🍽 Welcome to MealMate</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">Your AI-powered meal planner & food delivery system</p>
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        alt="Delicious meal"
        className="mx-auto rounded-xl shadow-xl w-full max-w-sm sm:max-w-2xl mb-4 sm:mb-6"
      />
      <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:scale-105 transition">Get Started</button>
    </div>
  );
}
