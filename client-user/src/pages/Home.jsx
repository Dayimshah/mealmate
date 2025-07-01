import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-6">
      {/* Left text column */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Welcome to MealMate
        </h1>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Your AI-powered meal planner & food delivery system. Discover healthy, delicious meals
          and create your personalized meal plan effortlessly.
        </p>
        <a
          href="/meals"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition"
        >
          Explore Meals
        </a>
      </div>

      {/* Right image column */}
      <div className="flex-shrink-0">
        <img
          src="YOUR_IMAGE_LINK_HERE"
          alt="Delicious food"
          className="rounded-2xl shadow-xl max-w-xs md:max-w-sm w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
