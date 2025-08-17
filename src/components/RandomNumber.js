// Create a random number between 1 and 100 and display it on button click

// Create state of a number and a number function

// Create a button that calls a function that generates a rendom number

// Display that number from the state in a h2 tag

import React, { useState } from "react";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const GenerateRndNumb = () => {
    setRandomNumber(Math.floor(Math.random() * 10));
  };

  return (
    <div>
      <h2>Random Number is now {randomNumber}</h2>
      <button onClick={GenerateRndNumb}>
        Click to Generate a Random Number
      </button>
    </div>
  );
};

export default RandomNumber;
