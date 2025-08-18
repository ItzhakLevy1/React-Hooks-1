import React, { useState } from "react";

const ItemList = () => {
  // State for the current input value
  const [item, setItem] = useState("");

  // State for the array of submitted items
  const [items, setItems] = useState([]);

  // Function to handle submit
  const handleSubmit = () => {
    if (item.trim()) {
      // Add the new item to the list
      setItems([...items, item]);
      // Clear the input
      setItem("");
    }
  };

  // Handle Enter key press
  const handleKeySubmit = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <h2>List Of Items:</h2>

      <input
        type="text"
        placeholder="Add An Item..."
        value={item} // controlled input
        onChange={(e) => setItem(e.target.value)}
        onKeyPress={handleKeySubmit}
      />
      <button onClick={handleSubmit} disabled={!item.trim()}>
        Submit
      </button>

      {/* Render the list */}
      <ul>
        {items.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
