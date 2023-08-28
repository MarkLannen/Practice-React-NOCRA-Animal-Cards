import React from "react";
import { useState } from "react";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}> Animal</button>
      <div>{animals}</div>
    </div>
  );
};

export default App;
