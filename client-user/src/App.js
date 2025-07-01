import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <img src="https://media.licdn.com/dms/image/v2/C560BAQGGYElCAoR0Bg/company-logo_200_200/company-logo_200_200/0/1677780604645/mealmate_inc_logo?e=2147483647&v=beta&t=k8BbjrnmcrhkMYNi8YS1cI9m0CKJtUWSiBR1YH6UmPY" alt="MealMate Logo" className="logo" />
        <nav>
          <a href="/">Meals</a>
          <a href="/">Meal Plan</a>
          <a href="/">Order</a>
          <a href="/">Login</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to MealMate</h1>
        <p>Your AI-powered meal planner & food delivery system. Discover healthy, delicious meals and create your personalized meal plan effortlessly.</p>
        <a className="btn" href="/">Explore Meals</a>
      </section>

      <section className="section">
        <h2>Our Story</h2>
        <p>Started in 2020, MealMate has served thousands of happy customers with fresh, nutritious meals crafted to individual preferences.</p>
        <img src="https://www.shutterstock.com/image-photo/indian-woman-giving-food-order-260nw-2347521897.jpg" alt="Our Story" />
      </section>

      <section className="section">
        <h2>What We Do</h2>
        <p>We combine AI technology with culinary expertise to design meal plans that meet your dietary needs and tastes.</p>
        <img src="https://thumbs.dreamstime.com/b/sushi-happiness-restaurant-people-customer-asian-waitress-giving-food-plate-order-product-japanese-cashier-server-startup-287653528.jpg" alt="What We Do" />
      </section>

      <section className="section">
        <h2>Our Branches</h2>
        <p>Find MealMate in major cities like Mumbai, Delhi, Bangalore, and Hyderabad, delivering fresh meals right to your door.</p>
        <img src="https://www.luxuryresidences.in/blog/wp-content/uploads/2024/09/chennai.webp" alt="Branches" />
      </section>

      <footer>
        <p>© 2025 MealMate. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
