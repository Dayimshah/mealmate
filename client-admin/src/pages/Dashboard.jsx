import React from 'react';
import './AdminDashboard.css'; // Make sure to create this CSS file

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <h1 className="admin-title">Admin Panel</h1>
        <div className="admin-links">
          <a href="#">Dashboard</a>
          <a href="#">Orders</a>
          <a href="#">Meals</a>
        </div>
      </nav>
      <main className="admin-content">
        <section className="admin-intro">
          <h2>Welcome to Your Dashboard</h2>
          <p>
            As the admin of MealMate, you can manage orders, add new meals, and view user statistics.
            Use the navigation above to get started. Make sure to regularly update meal options and
            keep track of order trends to deliver the best experience to your users.
          </p>
        </section>
        <section className="admin-images">
          <img src="https://source.unsplash.com/400x250/?food" alt="Food 1" />
          <img src="https://source.unsplash.com/400x250/?meal" alt="Food 2" />
          <img src="https://source.unsplash.com/400x250/?restaurant" alt="Food 3" />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
