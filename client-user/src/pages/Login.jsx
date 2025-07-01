import React from 'react';

export default function Login() {
  return (
    <div className="max-w-sm mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input type="email" placeholder="Email" className="block w-full mb-2 p-2 rounded" />
      <input type="password" placeholder="Password" className="block w-full mb-4 p-2 rounded" />
      <button className="bg-gray-800 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}