import React from 'react';

export default function Home() {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to MealMate</h1>
      <img
        src="YOUR_HERO_IMAGE_LINK_HERE"
        alt="Hero"
        className="mx-auto rounded-xl shadow-lg w-full max-w-xl"
      />
      <p className="mt-4">Your AI-powered meal planner & food delivery system</p>
    </div>
  );
}