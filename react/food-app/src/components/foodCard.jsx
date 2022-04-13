import React, { useEffect, useState } from "react";

const Foodcard = ({ food }) => {
  return (
    <div className="App">
      <li data-testid="food-card-item" key={food.id} className="box">
        <p>Food Name: {food.name}</p>
        <p>Place Of Origin: {food.origin}</p>
        <p>Star Rating: {food.starRating} ⭐️</p>
        <img className="image" src={food.image} />
      </li>
    </div>
  );
};

export default Foodcard;
