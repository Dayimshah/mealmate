import React from 'react';

export default function Meals() {
  const meals = [
    { title: 'Grilled Chicken', price: 10, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' },
    { title: 'Veggie Bowl', price: 8, img: 'https://images.unsplash.com/photo-1605477507380-8e2a7f2a4431' },
    { title: 'Salmon Delight', price: 12, img: 'https://images.unsplash.com/photo-1603133872878-684f39c7b4aa' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {meals.map((meal, idx) => (
        <div key={idx} className="bg-white/50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
          <img src={meal.img} alt={meal.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="font-semibold text-lg">{meal.title}</h2>
            <p className="text-green-700 font-bold">${meal.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
