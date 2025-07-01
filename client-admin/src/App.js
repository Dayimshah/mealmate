import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import MealsAdmin from './pages/MealsAdmin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/meals" element={<MealsAdmin />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
