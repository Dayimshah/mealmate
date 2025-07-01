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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg" />
          <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="Food 2" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGzp_ixhkXkTK_ArET679NI-5pv4YgYoG_Q&s" alt="Food 3" />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
