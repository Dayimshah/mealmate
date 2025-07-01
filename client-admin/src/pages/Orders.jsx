import React from 'react';

export default function Orders() {
  const orders = [
    { id: 1, user: 'John Doe', total: 25 },
    { id: 2, user: 'Jane Smith', total: 40 }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b">
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}