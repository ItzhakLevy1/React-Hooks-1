import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    if (count == 10) {
      setCount(10);
    }
  };

  const decreaseCount = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Count Is {count}</h2>
      <button onClick={increaseCount}>Increase counter</button>
      <br />
      <br />
      <button onClick={decreaseCount}>Decrease counter</button>
      <br />
      <br />
      <button onClick={resetCount}>Reset counter</button>
    </div>
  );
};

export default UseStateCounter;
