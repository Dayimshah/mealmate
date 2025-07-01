import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    nav className=flex justify-between items-center p-4 shadow bg-white30 backdrop-blur-md darkbg-gray-80030
      Link to= className=font-bold text-xlMealMateLink
      div className=space-x-4
        Link to=mealsMealsLink
        Link to=mealplanMeal PlanLink
        Link to=orderOrderLink
        Link to=loginLoginLink
      div
    nav
  );
}