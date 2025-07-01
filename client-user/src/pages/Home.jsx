import React from 'react';

export default function Home() {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-extrabold mb-4">🍽 Welcome to MealMate</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Your AI-powered meal planner & food delivery system</p>
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        alt="Delicious meal"
        className="mx-auto rounded-xl shadow-xl w-full max-w-2xl mb-6"
      />
      <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">Get Started</button>
    </div>
  );
}
