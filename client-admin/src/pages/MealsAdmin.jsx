import React from 'react';

export default function MealsAdmin() {
  const meals = [
    { title: 'Grilled Chicken', price: 10, img: 'YOUR_ADMIN_MEAL_IMAGE1' },
    { title: 'Veggie Bowl', price: 8, img: 'YOUR_ADMIN_MEAL_IMAGE2' }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Meals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal, idx) => (
          <div key={idx} className="bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-lg">
            <img src={meal.img} alt={meal.title} className="rounded mb-2" />
            <h2 className="font-bold">{meal.title}</h2>
            <p>${meal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}