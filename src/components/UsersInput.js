import React, { useState } from "react";

const UsersInput = () => {
  // State to track the current input value as user types
  const [name, setName] = useState("");

  // State to store the name only after user submits (via button or Enter key)
  const [submittedName, setSubmittedName] = useState("");

  // Function to handle form submission - copies name to submittedName
  const handleSubmit = () => {
    setSubmittedName(name);
  };

  // Function to handle Enter key press in the input field
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(); // Trigger submit when Enter is pressed
    }
  };

  return (
    <div>
      {/* Conditional greeting - shows welcome message until name is submitted */}
      <h2>{submittedName ? `Hi ${submittedName} 😊` : "Welcome! 👋"}</h2>

      <div>
        {/* Input field with controlled value and event handlers */}
        <input
          type="text"
          placeholder="Enter your name..."
          value={name} // Controlled input - value comes from state
          onChange={(e) => setName(e.target.value)} // Update name state as user types
          onKeyPress={handleKeyPress} // Listen for Enter key press
        />

        {/* Submit button - disabled when input is empty or contains only whitespace */}
        <button onClick={handleSubmit} disabled={!name.trim()}>
          Submit
        </button>
      </div>

      {/* Confirmation message - only shows after name has been submitted */}
      {submittedName && <p>Nice to meet you! 🎉</p>}
    </div>
  );
};

export default UsersInput;
