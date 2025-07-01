import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white/30 backdrop-blur-md dark:bg-gray-800/30 p-4 space-y-4">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <nav className="flex flex-col space-y-2">
        <Link to="/">Dashboard</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/meals">Meals</Link>
      </nav>
    </aside>
  );
}