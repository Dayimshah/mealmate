import React, { useState } from 'react';
import API_BASE_URL from '../api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      console.log(data);
      alert('Registered successfully!');
    } catch (err) {
      console.error(err);
      alert('Registration failed!');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="block w-full mb-2 p-2 rounded" />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="block w-full mb-2 p-2 rounded" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="block w-full mb-4 p-2 rounded" />
      <button onClick={handleRegister} className="bg-gray-800 text-white px-4 py-2 rounded">Register</button>
    </div>
  );
}
