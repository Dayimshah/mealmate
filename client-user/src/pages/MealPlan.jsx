import React from 'react';

export default function MealPlan() {
  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-700 dark:text-green-400">Your Weekly AI Meal Plan</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-md">Soon you'll get custom meal plans based on your taste and health goals — powered by AI!</p>
      <img
        src="https://images.unsplash.com/photo-1522184216315-1b0cdd6b8b20"
        alt="Meal plan preview"
        className="rounded-xl shadow-lg mt-6 w-full max-w-lg"
      />
    </div>
  );
}
