import React, { useState } from "react";

const UseStateToggle = () => {
  // Declare a piece of state called "isToggled" with its setter "setIsToggled"
  // The initial value is false (meaning "OFF" at the start)
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      {/* Display "ON" if isToggled is true, otherwise "OFF" */}
      <p>{isToggled ? "ON" : "OFF"}</p>

      {/* Button that toggles the value of isToggled when clicked */}
      {/* The updater function receives the previous value (prev) and returns the opposite */}
      <button onClick={() => setIsToggled((prev) => !prev)}>
        Click to toggle text
      </button>
    </div>
  );
};

export default UseStateToggle;
