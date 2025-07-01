import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Meals from './pages/Meals';
import MealPlan from './pages/MealPlan';
import OrderPage from './pages/OrderPage';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import AdminLogin from './pages/AdminLogin';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/mealplan" element={<MealPlan />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<AdminLogin />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
