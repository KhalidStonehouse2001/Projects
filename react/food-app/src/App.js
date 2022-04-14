import React, { useEffect, useState } from "react";
import Foodcard from "./components/foodCard";
import "./App.css";

function App() {
  const [food, setFood] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    fetch(
      "https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json"
    )
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <label>Search For Your Favourite Food</label>
        <input
          className="input-search"
          onChange={onChange}
          type="text"
          placeholder="UK, Fish, Pizza ..."
        />
      </form>
      <h1 className="results">Results</h1>

      <ul className="food-ul">
        {food
        .filter((item) => {
          let returnItem = true
          if (searchTerm) {
            if (
              item.name.includes(searchTerm) ||
              item.origin.includes(searchTerm)
            ) {
              returnItem = true
            } else  {
            return returnItem = false
          }
          return returnItem
          }
        })
        .map((item) => {
          return <Foodcard food={item} key={item.id} />;
        })}
      </ul>

      
    </div>
  );
}

export default App;
