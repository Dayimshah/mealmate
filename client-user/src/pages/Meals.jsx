import React from 'react';

export default function Meals() {
  const meals = [
    { title: 'Grilled Chicken Bowl', price: 12, img: 'https://images.unsplash.com/photo-1605477507380-8e2a7f2a4431' },
    { title: 'Vegan Buddha Bowl', price: 10, img: 'https://images.unsplash.com/photo-1603133872878-684f39c7b4aa' },
    { title: 'Spicy Salmon Rice', price: 14, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' },
    { title: 'Avocado Toast Deluxe', price: 9, img: 'https://images.unsplash.com/photo-1613145998964-5a0b77f91825' },
    { title: 'Beef Steak Plate', price: 16, img: 'https://images.unsplash.com/photo-1625947563692-8efbfc58d282' }
  ];

  return (
    <div className="p-4 sm:p-8 bg-white dark:bg-gray-900">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-green-700 dark:text-green-400">Our Top Picks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal, idx) => (
          <div key={idx} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur p-4 rounded-xl shadow hover:shadow-xl transition">
            <img src={meal.img} alt={meal.title} className="rounded-lg w-full h-48 object-cover mb-3" />
            <h3 className="font-semibold text-lg">{meal.title}</h3>
            <p className="text-green-700 font-bold">${meal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
