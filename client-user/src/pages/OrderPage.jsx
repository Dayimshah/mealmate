import React from 'react';

export default function OrderPage() {
  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-700 dark:text-green-400">Order Your Meals</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-md">Seamless checkout & real‑time delivery tracking coming soon.</p>
      <img
        src="https://img.freepik.com/premium-vector/white-plate-with-fork-knife-brown-wooden-background-illustration_567746-2477.jpg"
        alt="Order preview"
        className="rounded-xl shadow-lg mt-6 w-full max-w-lg"
      />
    </div>
  );
}
